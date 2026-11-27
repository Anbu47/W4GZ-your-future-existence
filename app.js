{
  const S = window.SETTINGS, D = window.DIMENSIONS, G = window.GROUPS, Q = window.QUESTIONS, C = window.CHALLENGES || [];
  const KEYS = Object.keys(D), GKEYS = Object.keys(G);
  const WEF = "https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/", W4GZ = "https://www.w4gz.com";
  const UI = {
    vi: {
      title: "Bạn có thể bị AI thay thế?",
      lead: (n, c) => `${n} câu hỏi và ${c} bài kiểm tra kỹ năng nhỏ, dựa trên 13 kỹ năng mà Diễn đàn Kinh tế Thế giới (WEF) cho là quan trọng nhất đến năm 2030.`,
      multi: "Chọn một hoặc nhiều đáp án đúng với bạn.",
      demoTitle: "4 trò chơi kỹ năng", demoLead: (n) => `Bản chơi thử riêng ${n} trò chơi trong quiz \"Bạn có thể bị AI thay thế?\". Chọn nhóm của bạn để bắt đầu.`,
      demoDone: "Điểm các trò chơi", demoNote: "Mỗi trò chấm từ 0 đến 1 điểm và cộng vào kỹ năng của nó trong quiz chính.", youAre: "Bạn là:", start: "Bắt đầu", time: "Khoảng 15 phút · Không cần đăng ký",
      kq: "Câu hỏi", kt: "Kiểm tra kỹ năng", of: (i, n) => `${i} / ${n}`,
      back: "← Quay lại", next: "Tiếp →",
      g: { item: (i, n) => `Món ${i} / ${n}`, msg: (i, n) => `Tin ${i} / ${n}`, scam: "Lừa đảo", safe: "An toàn", guess: (n) => `Bạn nghĩ mình sẽ đúng mấy câu trên ${n}?`, reset: "Xếp lại" },
      sw: { start: "Bắt đầu", round: (i, n) => `Lượt ${i} / ${n}`, ok: "Đúng", no: "Sai", done: "Xong rồi!", warn: "Lưu ý: trò này chỉ chơi được 1 lần. Khi đang chơi thì không quay lại được; chơi xong bạn vẫn quay lại các câu trước, nhưng không chơi lại trò này." },
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
      multi: "Choose one or more answers that fit you.",
      demoTitle: "4 skill games", demoLead: (n) => `A play-test page for the ${n} games in the quiz "Could AI replace you?". Choose your group to start.`,
      demoDone: "Game scores", demoNote: "Each game scores 0 to 1 point toward its skill in the main quiz.", youAre: "You are:", start: "Start", time: "About 15 minutes · No sign-up",
      kq: "Question", kt: "Skill test", of: (i, n) => `${i} of ${n}`,
      back: "← Back", next: "Next →",
      g: { item: (i, n) => `${i} of ${n}`, msg: (i, n) => `Message ${i} of ${n}`, scam: "Scam", safe: "Safe", guess: (n) => `How many of ${n} do you think you'll get right?`, reset: "Start over" },
      sw: { start: "Start", round: (i, n) => `Round ${i} of ${n}`, ok: "Right", no: "Wrong", done: "Done!", warn: "Note: you can play this only once. You can't go back mid-game; after it you can still go back to earlier questions, but not replay this game." },
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
  const AUDS = S.audiences || [];
  let aud = null;
  // Question for the chosen audience: its own q/o if it has them; a single text fills the blank answer.
  const qFor = (q) => {
    const a = (q.aud && q.aud[aud]) || {};
    let o = q.o;
    if (Array.isArray(a.o) && a.o.length) o = a.o;
    else if (typeof a.o === "string") o = q.o.map((x) => x.t.vi === "" ? { t: { vi: a.o, en: a.o }, s: x.s } : x);
    return { q: a.q || q.q, o };
  };
  // Test for the chosen audience: its own intro and items (question, answers, correct answer) if it has them.
  const tFor = (c) => {
    const a = (c.aud && c.aud[aud]) || {};
    return { intro: a.intro || c.intro, place: a.place, items: a.items || c.items || [] };
  };
  const itemsOf = (c) => tFor(c).items;
  // Mini games (scored 0–1, played once): see data/challenges.js.
  const GAMES = ["sort", "swipe", "predict", "order"];
  // Games-only page (games.html sets window.GAMES_ONLY): just the mini games, in quiz order, with their scores at the end.
  const DEMO = !!window.GAMES_ONLY;
  if (DEMO) { SEQ.length = 0; C.forEach((c, i) => { if (GAMES.includes(c.type)) SEQ.push({ k: "t", i }); }); }
  let screen, pos, item, qAns, tAns, qOrd, tOrd, sw, gs = {};
  function reset() { screen = "intro"; pos = 0; item = 0; sw = null; aud = null; }
  function start(a) {
    aud = a; screen = "play"; pos = 0; item = 0; sw = null;
    qAns = Q.map(() => []);
    gs = {};
    tAns = C.map((c) => c.type === "choice" ? itemsOf(c).map(() => null) : null);
    qOrd = Q.map((q) => shuffle(qFor(q).o.map((_, i) => i)));
    tOrd = C.map((c) => c.type === "choice" ? itemsOf(c).map((it) => shuffle(it.o.map((_, i) => i))) : []);
  }
  reset();

  const app = document.getElementById("app");
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tr = (o) => esc(typeof o === "string" ? o : (o[lang] ?? o.vi));
  const u = () => UI[lang];
  const LET = "ABCDEFGHIJ";
  // Points for a question: some (1–3) good answers chosen, or all good answers chosen.
  const PTS = { some: 1, all: 1.5 };

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
    if (DEMO) {
      app.innerHTML = `<h1>${esc(u().demoTitle)}</h1><p class="lead">${esc(u().demoLead(SEQ.length))}</p>
        <ol class="chlist">${SEQ.map((s) => `<li>${tr(C[s.i].title)} <span class="meta">· ${tr(D[C[s.i].edge].label)}</span></li>`).join("")}</ol>
        <p class="meta">${esc(u().youAre)}</p>
        <div class="row aud">${AUDS.map((a) => `<button class="btn" data-aud="${esc(a.id)}">${tr(a.label)}</button>`).join("")}</div>`;
      app.querySelectorAll("[data-aud]").forEach((b) => b.onclick = () => { start(b.dataset.aud); render(); });
      return;
    }
    app.innerHTML = `<h1>${esc(u().title)}</h1><p class="lead">${esc(u().lead(Q.length, C.length))}</p><p class="src"><a href="${WEF}">${esc(u().src)}</a></p>${hero()}
      <p class="meta">${esc(u().youAre)}</p>
      <div class="row aud">${AUDS.map((a) => `<button class="btn" data-aud="${esc(a.id)}">${tr(a.label)}</button>`).join("")}</div>
      <p class="meta">${esc(u().time)}</p>`;
    app.querySelectorAll("[data-aud]").forEach((b) => b.onclick = () => { start(b.dataset.aud); render(); });
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
    const q = qFor(Q[qi]);
    const sel = qAns[qi];
    app.innerHTML = header("q") + `<h2>${tr(q.q)}</h2><p class="meta">${esc(u().multi)}</p>
      <div class="opts many">${qOrd[qi].map((oi, k) => `<button class="opt multi" data-i="${oi}" aria-pressed="${sel.includes(oi)}"><b>${LET[k]}</b><span>${tr(q.o[oi].t)}</span></button>`).join("")}</div>
      <div class="row"><button class="btn" id="next" ${sel.length ? "" : "disabled"}>${esc(u().next)}</button></div>${backBtn()}`;
    // Tap to choose or un-choose; "Next" works once at least one answer is chosen.
    app.querySelectorAll(".opt").forEach((b) => b.onclick = () => {
      const i = +b.dataset.i, at = sel.indexOf(i);
      if (at >= 0) sel.splice(at, 1); else sel.push(i);
      b.setAttribute("aria-pressed", String(at < 0));
      document.getElementById("next").disabled = !sel.length;
    });
    document.getElementById("next").onclick = () => { if (sel.length) advance(); };
    bindBack();
  }

  function test(ti) {
    const c = C[ti], ct = tFor(c);
    const head = header("t") + `<h2>${tr(c.title)}</h2><p class="intro">${ct.place ? tr(ct.place) + " " : ""}${tr(ct.intro)}</p>`;
    if (c.type === "switch") return switchGame(ti, head);
    if (GAMES.includes(c.type)) return miniGame(ti, head, c, ct);
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
      app.innerHTML = head + `<p class="warn">${esc(u().sw.warn)}</p><div class="row"><button class="btn" id="go">${esc(u().sw.start)}</button></div>${backBtn()}`;
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
        tAns[ti] = sw.post >= n - 1 ? 1 : sw.post >= Math.ceil(n / 2) ? 0.5 : 0;
      } else sw.stim = pick();
      render();
    });
  }


  // ---------- Mini games ----------
  // Each: start screen (with the play-once note and Back), the game (no Back), then a "done" screen.
  function miniGame(ti, head, c, ct) {
    const g = gs[ti] || (gs[ti] = { started: false, done: false, step: 0, right: 0 });
    const items = ct.items, N = items.length;
    const finish = (pts) => { if (g.timer) clearInterval(g.timer); g.done = true; tAns[ti] = pts; render(); };
    if (!g.started) {
      app.innerHTML = head + `<p class="warn">${esc(u().sw.warn)}</p><div class="row"><button class="btn" id="go">${esc(u().sw.start)}</button></div>${backBtn()}`;
      document.getElementById("go").onclick = () => {
        g.started = true; g.order = shuffle(items.map((_, i) => i));
        if (c.type === "sort") {
          g.end = Date.now() + (c.seconds || 60) * 1000;
          g.timer = setInterval(() => {
            const left = Math.max(0, g.end - Date.now()), bar = document.querySelector(".timer i");
            if (bar) bar.style.width = (left / ((c.seconds || 60) * 10)) + "%";
            if (!left) finish(scoreCount(g.right, N));
          }, 200);
        }
        if (c.type === "predict") { g.pred = null; g.opts = items.map((it) => shuffle(it.o.map((_, i) => i))); }
        if (c.type === "order") g.seq = [];
        render();
      };
      bindBack();
      return;
    }
    if (g.done) {
      app.innerHTML = head + `<p class="fb ok"><strong>${esc(u().sw.done)}</strong></p><div class="row"><button class="btn" id="next">${esc(u().next)}</button></div>${backBtn()}`;
      document.getElementById("next").onclick = advance;
      bindBack();
      return;
    }
    const it = items[g.order[g.step]];
    const step = (ok) => { if (ok) g.right++; g.step++; if (g.step >= N) finish(scoreCount(g.right, N)); else render(); };

    if (c.type === "sort") {
      const left = Math.max(0, g.end - Date.now());
      app.innerHTML = head + `<div class="timer"><i style="width:${left / ((c.seconds || 60) * 10)}%"></i></div>
        <p class="meta">${esc(u().g.item(g.step + 1, N))}</p>
        <div class="gcard big-item">${tr(it.t)}</div>
        <div class="bins">${c.bins.map((b, i) => `<button class="opt bin" data-b="${i}">${tr(b)}</button>`).join("")}</div>`;
      app.querySelectorAll(".bin").forEach((b) => b.onclick = () => step(+b.dataset.b === it.b));
      return;
    }
    if (c.type === "swipe") {
      app.innerHTML = head + `<p class="meta">${esc(u().g.msg(g.step + 1, N))}</p>
        <div class="gcard msg"><p class="from">${tr(it.from)}</p><p>${tr(it.t)}</p></div>
        <div class="row two"><button class="btn scam" id="scam">${esc(u().g.scam)}</button><button class="btn ghost" id="safe">${esc(u().g.safe)}</button></div>`;
      document.getElementById("scam").onclick = () => step(it.scam === true);
      document.getElementById("safe").onclick = () => step(it.scam === false);
      return;
    }
    if (c.type === "predict") {
      if (g.pred === null) {
        app.innerHTML = head + `<h3 class="cq">${esc(u().g.guess(N))}</h3>
          <div class="nums">${Array.from({ length: N + 1 }, (_, n) => `<button class="opt num" data-n="${n}">${n}</button>`).join("")}</div>`;
        app.querySelectorAll(".num").forEach((b) => b.onclick = () => { g.pred = +b.dataset.n; render(); });
        return;
      }
      const qi = g.order[g.step];
      app.innerHTML = head + `<p class="meta">${esc(u().g.item(g.step + 1, N))}</p><h3 class="cq">${tr(it.q)}</h3>
        <div class="opts">${g.opts[qi].map((oi, k) => `<button class="opt" data-i="${oi}"><b>${LET[k]}</b><span>${tr(it.o[oi])}</span></button>`).join("")}</div>`;
      app.querySelectorAll(".opt").forEach((b) => b.onclick = () => {
        if (+b.dataset.i === it.c) g.right++;
        g.step++;
        // Scored on how close the guess was: exact = 1, off by one = 0.5.
        if (g.step >= N) { const d = Math.abs(g.pred - g.right); finish(d === 0 ? 1 : d === 1 ? 0.5 : 0); } else render();
      });
      return;
    }
    if (c.type === "order") {
      const pos = (i) => g.seq.indexOf(i);
      app.innerHTML = head + `<div class="olist">${g.order.map((i) => `<button class="opt ord" data-i="${i}" aria-pressed="${pos(i) >= 0}"><b>${pos(i) >= 0 ? pos(i) + 1 : ""}</b><span>${tr(items[i].t)}</span></button>`).join("")}</div>
        <div class="row"><button class="btn" id="next" ${g.seq.length === N ? "" : "disabled"}>${esc(u().next)}</button><button class="btn ghost" id="reset">${esc(u().g.reset)}</button></div>`;
      app.querySelectorAll(".ord").forEach((b) => b.onclick = () => { const i = +b.dataset.i, p = pos(i); if (p >= 0) g.seq.splice(p, 1); else g.seq.push(i); render(); });
      document.getElementById("reset").onclick = () => { g.seq = []; render(); };
      document.getElementById("next").onclick = () => {
        if (g.seq.length !== N) return;
        // Count pairs of people put in the same order as the correct ranking (r).
        let agree = 0, pairs = 0;
        for (let a = 0; a < N; a++) for (let b = a + 1; b < N; b++) { pairs++; if (items[g.seq[a]].r < items[g.seq[b]].r) agree++; }
        finish(agree >= pairs - 1 ? 1 : agree >= Math.ceil(pairs * 0.7) ? 0.5 : 0);
      };
    }
  }
  // Right answers → points: all or all but one = 1, at least 70% = 0.5.
  const scoreCount = (right, n) => right >= n - 1 ? 1 : right >= Math.ceil(n * 0.7) ? 0.5 : 0;

  function play() { const s = SEQ[pos]; s.k === "q" ? question(s.i) : test(s.i); }

  function score() {
    const raw = {}, max = {};
    KEYS.forEach((k) => { raw[k] = 0; max[k] = 0; });
    let total = 0, totalMax = 0;
    Q.forEach((q0, qi) => {
      const q = qFor(q0);
      // Good answers: choosing 1–3 of them gives +1 for the question, choosing all of them gives +1.5
      // (split across their skills).
      const good = q.o.map((o, i) => i).filter((i) => Object.values(q.o[i].s).some((v) => v > 0));
      const share = (ids, k) => ids.reduce((a, i) => a + Math.max(0, q.o[i].s[k] || 0), 0) / ids.length;
      KEYS.forEach((k) => { max[k] += Math.max(PTS.some * Math.max(0, ...good.map((i) => q.o[i].s[k] || 0)), PTS.all * share(good, k)); });
      totalMax += PTS.all;
      const picked = qAns[qi].filter((i) => good.includes(i));
      if (picked.length) {
        const target = picked.length === good.length ? PTS.all : PTS.some;
        KEYS.forEach((k) => { const v = target * share(picked, k); raw[k] += v; total += v; });
      }
      // Minus points: "machine" answers lower the skill bar and the hard-to-replace score;
      // harmful answers (harm: true) lower only the skill bar.
      qAns[qi].forEach((a) => Object.entries(q.o[a].s).forEach(([k, v]) => {
        if (v >= 0) return;
        raw[k] += v;
        if (!q.o[a].harm) total += v;
      }));
    });
    C.forEach((c, ti) => {
      let pts = 0;
      if (c.type === "switch" || GAMES.includes(c.type)) pts = tAns[ti] || 0;
      else { const its = itemsOf(c), right = its.filter((it, j) => tAns[ti][j] === it.c).length; pts = right / its.length; }
      max[c.edge] += 1; totalMax += 1; raw[c.edge] += pts; total += pts;
    });
    const pct = {}; KEYS.forEach((k) => { pct[k] = max[k] ? Math.min(100, Math.max(0, Math.round((raw[k] / max[k]) * 100))) : 0; });
    const gpct = {}; GKEYS.forEach((g) => { const ks = KEYS.filter((k) => D[k].group === g); gpct[g] = ks.reduce((a, k) => a + pct[k], 0) / ks.length; });
    const topG = [...GKEYS].sort((a, b) => gpct[b] - gpct[a])[0];
    const low = [...KEYS].sort((a, b) => pct[a] - pct[b])[0];
    return { overall: Math.max(0, Math.round((total / totalMax) * 100)), pct, topG, low };
  }

  function demoResult() {
    const al = AUDS.find((a) => a.id === aud);
    app.innerHTML = `<p class="count">W4GZ · ${esc(u().demoTitle)}${al ? ` · ${tr(al.label)}` : ""}</p><h1>${esc(u().demoDone)}</h1>
      <div class="grp"><div class="bars">${SEQ.map((s) => { const p = tAns[s.i] || 0; return `<div class="bar"><span>${tr(C[s.i].title)}</span><span class="t"><i style="width:${p * 100}%"></i></span><span class="v">${String(p).replace(".", ",")} / 1</span></div>`; }).join("")}</div></div>
      <p class="meta">${esc(u().demoNote)}</p>
      <div class="row"><button class="btn" id="again">${esc(u().again)}</button></div>`;
    document.getElementById("again").onclick = () => { reset(); render(); };
  }

  function result() {
    if (DEMO) return demoResult();
    const r = score(), band = S.bands.find((b) => r.overall >= b.min), top = G[r.topG], low = D[r.low];
    const al = AUDS.find((a) => a.id === aud);
    app.innerHTML = `<p class="count">W4GZ · Your Future Existence${al ? ` · ${tr(al.label)}` : ""}</p><h1>${tr(band.title)}</h1>
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
