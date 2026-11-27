{
  const S = window.SETTINGS, D = window.DIMENSIONS, G = window.GROUPS, Q = window.QUESTIONS, C = window.CHALLENGES || [];
  const KEYS = Object.keys(D), GKEYS = Object.keys(G);
  const WEF = "https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/", W4GZ = "https://www.w4gz.com";
  const UI = {
    vi: {
      title: "Bạn có thể bị AI thay thế?",
      lead: (n, c) => `${n} câu hỏi và ${c} bài kiểm tra kỹ năng nhỏ, dựa trên 13 kỹ năng mà Diễn đàn Kinh tế Thế giới (WEF) cho là quan trọng nhất đến năm 2030.`,
      start: "Bắt đầu", time: "Khoảng 15 phút · Không cần đăng ký",
      kq: "Câu hỏi", kt: "Kiểm tra kỹ năng", of: (i, n) => `${i} / ${n}`,
      back: "← Quay lại", next: "Tiếp →",
      sw: { start: "Bắt đầu", round: (i, n) => `Lượt ${i} / ${n}`, ok: "Đúng", no: "Sai", done: "Xong rồi!" },
      machine: "Máy", human: "Con người",
      edge: "Độ khó thay thế", yourType: "Nhóm lợi thế mạnh nhất của bạn",
      edges: "13 kỹ năng của bạn", grow: "Gợi ý để phát triển",
      growOn: (l) => `Kỹ năng nên rèn thêm: ${l}.`,
      again: "Làm lại", copy: "Sao chép kết quả", copied: "Đã sao chép!",
      share: (p, t) => `Mình khó bị AI thay thế ${p}% — mình là "${t}". Còn bạn? W4GZ · Your Future Existence`,
      based: "Quiz này dựa trên", why: "Dùng cho:",
      src: "Nguồn: Báo cáo Future of Jobs 2025 — Diễn đàn Kinh tế Thế giới (WEF)",
      srcSkills: "13 kỹ năng theo Báo cáo Future of Jobs 2025 của WEF",
      ctaLabel: "Writing for Gen Z", ctaTitle: "Viết chính là nghĩ.",
      ctaText: "AI có thể viết thay bạn, nhưng không thể nghĩ thay bạn. W4GZ giúp người trẻ rèn tư duy, sự thấu cảm và tiếng nói riêng qua việc viết.",
      ctaBtn: "Khám phá W4GZ →",
      note: "Quiz này để vui và để suy ngẫm, không phải dự đoán nghề nghiệp. Các bài kiểm tra chỉ là dấu hiệu nhỏ, không phải bài đánh giá thật. Không có câu trả lời nào được lưu lại."
    },
    en: {
      title: "Could AI replace you?",
      lead: (n, c) => `${n} questions and ${c} mini skill tests, based on the 13 skills the World Economic Forum (WEF) sees as most important to 2030.`,
      start: "Start", time: "About 15 minutes · No sign-up",
      kq: "Question", kt: "Skill test", of: (i, n) => `${i} of ${n}`,
      back: "← Back", next: "Next →",
      sw: { start: "Start", round: (i, n) => `Round ${i} of ${n}`, ok: "Right", no: "Wrong", done: "Done!" },
      machine: "Machine", human: "Human",
      edge: "Hard-to-replace score", yourType: "Your strongest group",
      edges: "Your 13 skills", grow: "A tip to grow",
      growOn: (l) => `Skill to build up: ${l}.`,
      again: "Try again", copy: "Copy my result", copied: "Copied!",
      share: (p, t) => `I'm ${p}% hard to replace by AI — I'm "${t}". What about you? W4GZ · Your Future Existence`,
      based: "This quiz is based on", why: "Used for:",
      src: "Source: Future of Jobs Report 2025 — World Economic Forum (WEF)",
      srcSkills: "13 skills from the WEF Future of Jobs Report 2025",
      ctaLabel: "Writing for Gen Z", ctaTitle: "Writing is thinking.",
      ctaText: "AI can write for you, but it can't think for you. W4GZ helps young people build thinking, empathy and their own voice through writing.",
      ctaBtn: "Explore W4GZ →",
      note: "This quiz is for fun and reflection, not a career prediction. The skill tests are small signals, not real assessments. No answers are saved."
    }
  };

  let lang = S.defaultLang || "vi";
  try { const l = localStorage.getItem("w4gz-yfe-lang"); if (l === "vi" || l === "en") lang = l; } catch (e) {}

  // Sequence: tests spread evenly between questions (1 question, 1 test… when the counts match).
  const SEQ = [];
  let ti = 0;
  Q.forEach((_, qi) => {
    SEQ.push({ k: "q", i: qi });
    const due = Math.round(((qi + 1) * C.length) / Q.length);
    while (ti < due) SEQ.push({ k: "t", i: ti++ });
  });
  while (ti < C.length) SEQ.push({ k: "t", i: ti++ });

  const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const itemsOf = (c) => c.items || [];
  let screen, pos, item, qAns, tAns, qOrd, tOrd, sw;
  function reset() {
    screen = "intro"; pos = 0; item = 0; sw = null;
    qAns = Q.map(() => null);
    tAns = C.map((c) => c.type === "switch" ? null : itemsOf(c).map(() => null));
    qOrd = Q.map((q) => shuffle(q.o.map((_, i) => i)));
    tOrd = C.map((c) => itemsOf(c).map((it) => shuffle(it.o.map((_, i) => i))));
  }
  reset();

  const app = document.getElementById("app");
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tr = (o) => esc(typeof o === "string" ? o : (o[lang] ?? o.vi));
  const u = () => UI[lang];
  const LET = "ABCDEFGH";

  function hero() {
    let px = "";
    for (let y = 30; y < 300; y += 14) for (let x = 40; x < 160; x += 14) {
      const op = Math.max(0, 1 - (x - 40) / 125) * (0.55 + 0.45 * (((x * 7 + y * 13) % 10) / 10));
      if (op > 0.08) px += `<rect x="${x}" y="${y}" width="11" height="11" rx="2" fill="var(--machine)" opacity="${op.toFixed(2)}"/>`;
    }
    return `<div class="hero" aria-hidden="true"><svg viewBox="0 0 300 300">
      <defs><clipPath id="body"><circle cx="150" cy="108" r="58"/><path d="M40 300c0-70 50-118 110-118s110 48 110 118z"/></clipPath>
      <linearGradient id="skin" x1="0" x2="1"><stop offset=".35" stop-color="var(--ink)" stop-opacity="0"/><stop offset=".6" stop-color="var(--ink)"/></linearGradient></defs>
      <g clip-path="url(#body)"><rect width="300" height="300" fill="url(#skin)"/>${px}</g>
      <path d="M150 50a58 58 0 0 1 0 116" fill="none" stroke="var(--accent)" stroke-width="5" stroke-linecap="round" transform="translate(4 0)"/>
      <circle cx="176" cy="104" r="6" fill="var(--bg)"/></svg>
      <div class="hero-tags"><span class="m">${esc(u().machine)}</span><span class="h">${esc(u().human)}</span></div></div>`;
  }

  function intro() {
    app.innerHTML = `<h1>${esc(u().title)}</h1><p class="lead">${esc(u().lead(Q.length, C.length))}</p><p class="src"><a href="${WEF}">${esc(u().src)}</a></p>${hero()}
      <div class="row"><button class="btn" id="go">${esc(u().start)}</button><span class="meta">${esc(u().time)}</span></div>`;
    document.getElementById("go").onclick = () => { screen = "play"; render(); };
  }

  const advance = () => { pos++; item = 0; if (pos >= SEQ.length) screen = "result"; render(); };
  const canBack = () => pos > 0 || item > 0;
  // Go back one step: previous item inside a multi-part test, otherwise the previous question or test
  // (landing on the last part of a multi-part test). A finished rule-change game shows its "done" screen.
  const goBack = () => {
    if (item > 0) { item--; return render(); }
    pos--; item = 0;
    const s = SEQ[pos];
    if (s.k === "t") { const its = itemsOf(C[s.i]); if (its.length) item = its.length - 1; }
    render();
  };
  const header = (kind) => `<div class="progress"><i style="width:${(pos / SEQ.length) * 100}%"></i></div>
    <p class="count"><span class="part${kind === "t" ? " test" : ""}">${esc(kind === "t" ? u().kt : u().kq)}</span> · ${esc(u().of(pos + 1, SEQ.length))}</p>`;
  const backBtn = () => canBack() ? `<div class="row"><button class="btn ghost" id="back">${esc(u().back)}</button></div>` : "";
  const bindBack = () => { const b = document.getElementById("back"); if (b) b.onclick = goBack; };

  function question(qi) {
    const q = Q[qi];
    app.innerHTML = header("q") + `<h2>${tr(q.q)}</h2>
      <div class="opts many">${qOrd[qi].map((oi, k) => `<button class="opt" data-i="${oi}" aria-pressed="${qAns[qi] === oi}"><b>${LET[k]}</b><span>${tr(q.o[oi].t)}</span></button>`).join("")}</div>${backBtn()}`;
    app.querySelectorAll(".opt").forEach((b) => b.onclick = () => { qAns[qi] = +b.dataset.i; advance(); });
    bindBack();
  }

  function test(ti) {
    const c = C[ti];
    const head = header("t") + `<h2>${tr(c.title)}</h2><p class="intro">${tr(c.intro)}</p>`;
    if (c.type === "switch") return switchGame(ti, head);
    const its = itemsOf(c), it = its[item];
    app.innerHTML = head + `${its.length > 1 ? `<p class="meta">${item + 1} / ${its.length}</p>` : ""}<h3 class="cq">${tr(it.q)}</h3>
      <div class="opts">${tOrd[ti][item].map((oi, k) => `<button class="opt" data-i="${oi}" aria-pressed="${tAns[ti][item] === oi}"><b>${LET[k]}</b><span>${tr(it.o[oi])}</span></button>`).join("")}</div>${backBtn()}`;
    app.querySelectorAll(".opt").forEach((b) => b.onclick = () => {
      tAns[ti][item] = +b.dataset.i;
      if (item < its.length - 1) { item++; render(); } else advance();
    });
    bindBack();
  }

  // Rule-change game: match by colour for the first rounds, then silently by shape. Score: rounds right after the switch.
  const ROUNDS = 14, SWITCH_AT = 6;
  const COL = { red: "#e8453c", blue: "#2f6fdc" };
  const pick = () => Math.random() < 0.5 ? ["square", "red"] : ["circle", "blue"];
  const shapeSvg = (shape, col, size) => `<svg viewBox="0 0 60 60" width="${size}" height="${size}" aria-hidden="true">${shape === "circle"
    ? `<circle cx="30" cy="30" r="24" fill="${COL[col]}"/>` : `<rect x="7" y="7" width="46" height="46" rx="6" fill="${COL[col]}"/>`}</svg>`;
  function switchGame(ti, head) {
    if (!sw) sw = { started: false, round: 0, post: 0, stim: pick(), fb: null, done: false };
    if (!sw.started) {
      app.innerHTML = head + `<div class="row"><button class="btn" id="go">${esc(u().sw.start)}</button></div>${backBtn()}`;
      document.getElementById("go").onclick = () => { sw.started = true; render(); };
      bindBack();
      return;
    }
    if (sw.done) {
      app.innerHTML = head + `<p class="fb ok"><strong>${esc(u().sw.done)}</strong></p><div class="row"><button class="btn" id="next">${esc(u().next)}</button></div>${backBtn()}`;
      document.getElementById("next").onclick = advance;
      bindBack();
      return;
    }
    const [shape, col] = sw.stim;
    app.innerHTML = head + `<p class="meta">${esc(u().sw.round(sw.round + 1, ROUNDS))}</p>
      <div class="game"><div class="stim">${shapeSvg(shape, col, 96)}</div>
        <div class="samples"><button class="opt sample" data-k="0" aria-label="red circle">${shapeSvg("circle", "red", 64)}</button>
        <button class="opt sample" data-k="1" aria-label="blue square">${shapeSvg("square", "blue", 64)}</button></div>
        <p class="fb-mini ${sw.fb === null ? "" : sw.fb ? "ok" : "bad"}">${sw.fb === null ? "&nbsp;" : esc(sw.fb ? u().sw.ok : u().sw.no)}</p></div>`;
    app.querySelectorAll(".sample").forEach((b) => b.onclick = () => {
      const want = sw.round < SWITCH_AT ? (col === "red" ? 0 : 1) : (shape === "circle" ? 0 : 1);
      const ok = +b.dataset.k === want;
      if (sw.round > SWITCH_AT && ok) sw.post++;
      sw.fb = ok; sw.round++;
      if (sw.round >= ROUNDS) {
        sw.done = true;
        const n = ROUNDS - SWITCH_AT - 1;
        tAns[ti] = sw.post >= n - 1 ? 2 : sw.post >= Math.ceil(n / 2) ? 1 : 0;
      } else sw.stim = pick();
      render();
    });
  }

  function play() { const s = SEQ[pos]; s.k === "q" ? question(s.i) : test(s.i); }

  function score() {
    const raw = {}, max = {};
    KEYS.forEach((k) => { raw[k] = 0; max[k] = 0; });
    let total = 0, totalMax = 0;
    Q.forEach((q, qi) => {
      KEYS.forEach((k) => { max[k] += Math.max(0, ...q.o.map((o) => o.s[k] || 0)); });
      totalMax += Math.max(...q.o.map((o) => Object.values(o.s).reduce((a, b) => a + b, 0)));
      const a = qAns[qi]; if (a === null) return;
      Object.entries(q.o[a].s).forEach(([k, v]) => { raw[k] += v; total += v; });
    });
    C.forEach((c, ti) => {
      let pts = 0;
      if (c.type === "switch") pts = tAns[ti] || 0;
      else { const its = itemsOf(c), right = its.filter((it, j) => tAns[ti][j] === it.c).length; pts = Math.round((right / its.length) * 2); }
      max[c.edge] += 2; totalMax += 2; raw[c.edge] += pts; total += pts;
    });
    const pct = {}; KEYS.forEach((k) => { pct[k] = max[k] ? Math.round((raw[k] / max[k]) * 100) : 0; });
    const gpct = {}; GKEYS.forEach((g) => { const ks = KEYS.filter((k) => D[k].group === g); gpct[g] = ks.reduce((a, k) => a + pct[k], 0) / ks.length; });
    const topG = [...GKEYS].sort((a, b) => gpct[b] - gpct[a])[0];
    const low = [...KEYS].sort((a, b) => pct[a] - pct[b])[0];
    return { overall: Math.round((total / totalMax) * 100), pct, topG, low };
  }

  function result() {
    const r = score(), band = S.bands.find((b) => r.overall >= b.min), top = G[r.topG], low = D[r.low];
    app.innerHTML = `<p class="count">W4GZ · Your Future Existence</p><h1>${tr(band.title)}</h1>
      <div class="score"><div class="meta">${esc(u().edge)}</div><div class="big">${r.overall}<small>%</small></div>
        <div class="meter"><i style="left:0%"></i></div>
        <div class="ends"><span class="m">${esc(u().machine)}</span><span class="h">${esc(u().human)}</span></div>
        <p style="margin:10px 0 0">${tr(band.text)}</p></div>
      <div class="type"><p class="k">${esc(u().yourType)}: ${tr(top.label)}</p><h3>${tr(top.type)}</h3><p>${tr(top.about)}</p></div>
      <h2>${esc(u().edges)}</h2><p class="src"><a href="${WEF}">${esc(u().srcSkills)}</a></p>
      ${GKEYS.map((g) => `<div class="grp${g === r.topG ? " best" : ""}"><h4>${tr(G[g].label)}</h4><div class="bars">${KEYS.filter((k) => D[k].group === g).map((k) =>
        `<div class="bar"><span>${tr(D[k].label)}</span><span class="t"><i style="width:${r.pct[k]}%"></i></span><span class="v">${r.pct[k]}%</span></div>`).join("")}</div></div>`).join("")}
      <div class="tip"><strong>${esc(u().grow)}</strong>${esc(u().growOn(low.label[lang] || low.label.vi))} ${tr(low.tip)}</div>
      <div class="row"><button class="btn" id="copy">${esc(u().copy)}</button><button class="btn ghost" id="again">${esc(u().again)}</button></div>
      <a class="cta" href="${W4GZ}" style="text-decoration:none"><span class="brand-logo" role="img" aria-label="W4GZ"></span>
        <h3>${esc(u().ctaTitle)}</h3><p>${esc(u().ctaText)}</p><p class="quote">Create narratives worth living</p>
        <span class="btn">${esc(u().ctaBtn)}</span><span class="label">www.w4gz.com</span></a>
      <details class="sources"><summary>${esc(u().based)}</summary>
        <ul>${(window.SOURCES || []).map((s) => `<li>${s.url ? `<a href="${esc(s.url)}">${esc(s.name)}</a>` : `<strong>${esc(s.name)}</strong>`}<br><span>${esc(u().why)} ${tr(s.used)}</span></li>`).join("")}</ul></details>`;
    requestAnimationFrame(() => requestAnimationFrame(() => { app.querySelector(".meter i").style.left = r.overall + "%"; }));
    document.getElementById("again").onclick = () => { reset(); render(); };
    const copy = document.getElementById("copy");
    copy.onclick = async () => { try { await navigator.clipboard.writeText(u().share(r.overall, top.type[lang] || top.type.vi)); copy.textContent = u().copied; } catch (e) {} };
  }

  function render() {
    document.documentElement.lang = lang;
    ["vi", "en"].forEach((l) => document.getElementById("lang-" + l).setAttribute("aria-pressed", String(l === lang)));
    document.getElementById("foot-note").textContent = u().note;
    ({ intro, play, result })[screen]();
    window.scrollTo({ top: 0 });
  }

  document.querySelectorAll(".lang button").forEach((b) => b.onclick = () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("w4gz-yfe-lang", lang); } catch (e) {}
    render();
  });
  render();
}
