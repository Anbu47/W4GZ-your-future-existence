{
  const S = window.SETTINGS, D = window.DIMENSIONS, Q = window.QUESTIONS;
  const KEYS = Object.keys(D);
  const UI = {
    vi: {
      title: "Bạn có thể bị AI thay thế?",
      lead: "12 câu hỏi về cách bạn nghĩ, cảm nhận và làm việc. Cuối cùng, bạn sẽ biết điều gì khiến bạn khó bị thay thế nhất — và nên phát triển điều gì tiếp theo.",
      start: "Bắt đầu", time: "Khoảng 3 phút · Không cần đăng ký",
      machine: "Máy", human: "Con người",
      of: (i, n) => `Câu ${i} / ${n}`,
      back: "← Câu trước", next: "Câu tiếp →", finish: "Xem kết quả",
      edge: "Độ khó thay thế", yourType: "Điểm mạnh lớn nhất của bạn",
      edges: "Năm \"lợi thế con người\" của bạn", grow: "Gợi ý để phát triển",
      growOn: (l) => `Thử rèn thêm: ${l}`,
      again: "Làm lại", copy: "Sao chép kết quả", copied: "Đã sao chép!",
      share: (p, t) => `Mình khó bị AI thay thế ${p}% — mình là "${t}". Còn bạn? W4GZ · Your Future Existence`,
      note: "Quiz này để vui và để suy ngẫm, không phải dự đoán nghề nghiệp. Không có câu trả lời nào được lưu lại."
    },
    en: {
      title: "Could AI replace you?",
      lead: "12 questions about how you think, feel and work. At the end you'll see what makes you hardest to replace — and what to grow next.",
      start: "Start", time: "About 3 minutes · No sign-up",
      machine: "Machine", human: "Human",
      of: (i, n) => `Question ${i} of ${n}`,
      back: "← Back", next: "Next →", finish: "See my result",
      edge: "Hard-to-replace score", yourType: "Your biggest strength",
      edges: "Your five \"human edges\"", grow: "A tip to grow",
      growOn: (l) => `Try building up: ${l}`,
      again: "Try again", copy: "Copy my result", copied: "Copied!",
      share: (p, t) => `I'm ${p}% hard to replace by AI — I'm "${t}". What about you? W4GZ · Your Future Existence`,
      note: "This quiz is for fun and reflection, not a career prediction. No answers are saved."
    }
  };

  let lang = S.defaultLang || "vi";
  try { const l = localStorage.getItem("w4gz-yfe-lang"); if (l === "vi" || l === "en") lang = l; } catch (e) {}
  let screen = "intro", idx = 0;
  let answers = new Array(Q.length).fill(null);

  const app = document.getElementById("app");
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tr = (o) => esc(o[lang] ?? o.vi);
  const u = () => UI[lang];

  // Picture: a person whose left side dissolves into machine pixels.
  function hero() {
    let px = "";
    for (let y = 30; y < 300; y += 14) {
      for (let x = 40; x < 160; x += 14) {
        const op = Math.max(0, 1 - (x - 40) / 125) * (0.55 + 0.45 * (((x * 7 + y * 13) % 10) / 10));
        if (op > 0.08) px += `<rect x="${x}" y="${y}" width="11" height="11" rx="2" fill="var(--teal)" opacity="${op.toFixed(2)}"/>`;
      }
    }
    return `<div class="hero" aria-hidden="true">
      <svg viewBox="0 0 300 300">
        <defs><clipPath id="body"><circle cx="150" cy="108" r="58"/><path d="M40 300c0-70 50-118 110-118s110 48 110 118z"/></clipPath>
        <linearGradient id="skin" x1="0" x2="1"><stop offset=".35" stop-color="var(--coral)" stop-opacity="0"/><stop offset=".6" stop-color="var(--coral)"/></linearGradient></defs>
        <g clip-path="url(#body)"><rect width="300" height="300" fill="url(#skin)"/>${px}</g>
        <path d="M150 50a58 58 0 0 1 0 116" fill="none" stroke="var(--sun)" stroke-width="5" stroke-linecap="round" transform="translate(4 0)"/>
        <circle cx="176" cy="104" r="6" fill="var(--bg)"/>
      </svg>
      <div class="hero-tags"><span class="m">${esc(u().machine)}</span><span class="h">${esc(u().human)}</span></div>
    </div>`;
  }

  function intro() {
    app.innerHTML = `<h1>${esc(u().title)}</h1>
      <p class="lead">${esc(u().lead)}</p>
      ${hero()}
      <div class="row"><button class="btn" id="go">${esc(u().start)}</button><span class="meta">${esc(u().time)}</span></div>`;
    document.getElementById("go").onclick = () => { screen = "quiz"; idx = 0; render(); };
  }

  function quiz() {
    const q = Q[idx], n = Q.length, last = idx === n - 1;
    app.innerHTML = `<div class="progress"><i style="width:${(idx / n) * 100}%"></i></div>
      <p class="count">${esc(u().of(idx + 1, n))}</p>
      <h2>${tr(q.q)}</h2>
      <div class="opts">${q.o.map((o, i) => `<button class="opt" data-i="${i}" aria-pressed="${answers[idx] === i}"><b>${"ABCD"[i]}</b><span>${tr(o.t)}</span></button>`).join("")}</div>
      <div class="row">
        ${idx > 0 ? `<button class="btn ghost" id="back">${esc(u().back)}</button>` : ""}
        ${answers[idx] !== null ? `<button class="btn" id="next">${esc(last ? u().finish : u().next)}</button>` : ""}
      </div>`;
    app.querySelectorAll(".opt").forEach((b) => b.onclick = () => {
      answers[idx] = +b.dataset.i;
      if (last) { quiz(); return; }
      idx++; render();
    });
    const back = document.getElementById("back"); if (back) back.onclick = () => { idx--; render(); };
    const next = document.getElementById("next"); if (next) next.onclick = () => { if (last) screen = "result"; else idx++; render(); };
  }

  function score() {
    const raw = {}, max = {};
    KEYS.forEach((k) => { raw[k] = 0; max[k] = 0; });
    let total = 0, totalMax = 0;
    Q.forEach((q, qi) => {
      KEYS.forEach((k) => { max[k] += Math.max(0, ...q.o.map((o) => o.s[k] || 0)); });
      totalMax += Math.max(...q.o.map((o) => Object.values(o.s).reduce((a, b) => a + b, 0)));
      const a = answers[qi]; if (a === null) return;
      Object.entries(q.o[a].s).forEach(([k, v]) => { raw[k] += v; total += v; });
    });
    const pct = {}; KEYS.forEach((k) => { pct[k] = max[k] ? Math.round((raw[k] / max[k]) * 100) : 0; });
    const order = [...KEYS].sort((a, b) => pct[b] - pct[a] || raw[b] - raw[a]);
    return { overall: Math.round((total / totalMax) * 100), pct, top: order[0], low: order[order.length - 1] };
  }

  function result() {
    const r = score(), band = S.bands.find((b) => r.overall >= b.min), top = D[r.top], low = D[r.low];
    app.innerHTML = `<p class="count">W4GZ · Your Future Existence</p>
      <h1>${tr(band.title)}</h1>
      <div class="score">
        <div class="meta">${esc(u().edge)}</div>
        <div class="big">${r.overall}<small>%</small></div>
        <div class="meter"><i style="left:0%"></i></div>
        <div class="ends"><span class="m">${esc(u().machine)}</span><span class="h">${esc(u().human)}</span></div>
        <p style="margin:10px 0 0">${tr(band.text)}</p>
      </div>
      <div class="type"><p class="k">${esc(u().yourType)}</p><h3>${tr(top.type)}</h3><p>${tr(top.about)}</p></div>
      <h2>${esc(u().edges)}</h2>
      <div class="bars">${KEYS.map((k) => `<div class="bar${k === r.top ? " top" : ""}"><span>${tr(D[k].label)}</span><span class="t"><i style="width:${r.pct[k]}%"></i></span><span class="v">${r.pct[k]}%</span></div>`).join("")}</div>
      <div class="tip"><strong>${esc(u().grow)}</strong>${esc(u().growOn((low.label[lang] || low.label.vi).toLowerCase()))}. ${tr(low.tip)}</div>
      <div class="row"><button class="btn" id="copy">${esc(u().copy)}</button><button class="btn ghost" id="again">${esc(u().again)}</button></div>`;
    requestAnimationFrame(() => requestAnimationFrame(() => { app.querySelector(".meter i").style.left = r.overall + "%"; }));
    document.getElementById("again").onclick = () => { answers = answers.map(() => null); screen = "intro"; render(); };
    const copy = document.getElementById("copy");
    copy.onclick = async () => {
      try { await navigator.clipboard.writeText(u().share(r.overall, top.type[lang])); copy.textContent = u().copied; } catch (e) {}
    };
  }

  function render() {
    document.documentElement.lang = lang;
    ["vi", "en"].forEach((l) => document.getElementById("lang-" + l).setAttribute("aria-pressed", String(l === lang)));
    document.getElementById("foot-note").textContent = u().note;
    if (screen === "intro") intro(); else if (screen === "quiz") quiz(); else result();
    window.scrollTo({ top: 0 });
  }

  document.querySelectorAll(".lang button").forEach((b) => b.onclick = () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("w4gz-yfe-lang", lang); } catch (e) {}
    render();
  });
  render();
}
