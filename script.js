"use strict";

/* =========================================================
   クイズデータ
   出典: 食事・栄養_1.md（この資料の記載内容のみを使用）
   テーマ順: 1 朝食 → 2 昼食 → 3 練習前 → 4 練習後 → 5 夕食 → 6 水分
   ========================================================= */
const QUIZ = [
  // ---- #1 朝食の量とバランス ----
  {
    topic: "① 朝食の量とバランス",
    question: "朝食は起床後どのくらいの時間内に食べるのが理想？",
    choices: ["起床後1時間以内", "起床後3時間以内", "起床後ちょうど30分", "食べる時間は関係ない"],
    answer: 0,
    explain: "起床後1時間以内に食べるのが理想。一日のエネルギーの土台は朝に決まる。",
  },
  {
    topic: "① 朝食の量とバランス",
    question: "朝食の「組み合わせの基本」に当てはまらないものは？",
    choices: [
      "炭水化物（ご飯・パン・麺）",
      "たんぱく質（卵・納豆・魚など）",
      "野菜や果物（ビタミン・ミネラル）",
      "揚げ物など脂っこいおかず中心",
    ],
    answer: 3,
    explain: "基本は「炭水化物＋たんぱく質＋野菜や果物」。量よりも毎日必ず食べることを優先する。",
  },
  {
    topic: "① 朝食の量とバランス",
    question: "朝に食欲がない選手への、資料のアクションは？",
    choices: [
      "何も食べずに我慢する",
      "バナナ1本＋牛乳やゼリー飲料でもよい",
      "昼にまとめて2食分食べる",
      "コーヒーだけ飲む",
    ],
    answer: 1,
    explain: "まず「何か口に入れる」習慣から。バナナ1本＋牛乳やゼリー飲料でも効果がある。",
  },

  // ---- #2 昼食の量とバランス ----
  {
    topic: "② 昼食の量とバランス",
    question: "1日の中で昼食はどう位置づける？",
    choices: [
      "最も軽くする食事",
      "最もしっかりエネルギーを補給する食事",
      "抜いてもよい食事",
      "お菓子で済ませる食事",
    ],
    answer: 1,
    explain: "昼食は「1日で最もしっかりエネルギーを補給する食事」。放課後の練習の直接のエネルギー源になる。",
  },
  {
    topic: "② 昼食の量とバランス",
    question: "昼食のご飯の量の目安は？",
    choices: ["100g程度", "200〜250g（運動量が多い選手はさらに多め）", "50g以下", "ご飯は摂らない"],
    answer: 1,
    explain: "ご飯多め（200〜250g）＋メイン＋副菜1〜2品が目安。運動量が多い選手はさらに多めに。",
  },
  {
    topic: "② 昼食の量とバランス",
    question: "昼食後の過ごし方として正しいのは？",
    choices: [
      "すぐ全力で動き出す",
      "食後30分はリラックスして過ごす",
      "すぐ激しい筋トレをする",
      "すぐに2時間昼寝する",
    ],
    answer: 1,
    explain: "食後すぐ激しく動くと消化不良（腹痛など）を起こすため、昼食後30分はリラックスして過ごす。",
  },

  // ---- #3 練習前の栄養補給 ----
  {
    topic: "③ 練習前の栄養補給",
    question: "練習前の栄養補給は、練習の何時間前が目安？",
    choices: ["練習1〜2時間前", "練習5〜6時間前", "練習の10分前", "練習が終わった後"],
    answer: 0,
    explain: "練習1〜2時間前に、消化が良い炭水化物中心（おにぎり・バナナ・うどん・カステラ）を食べる。",
  },
  {
    topic: "③ 練習前の栄養補給",
    question: "練習直前（30分以内）でも有効なものは？",
    choices: [
      "おにぎりなどの固形物",
      "揚げ物",
      "エネルギーゼリーやスポーツドリンクなど液状・半液状のもの",
      "カステラ",
    ],
    answer: 2,
    explain: "直前の固形物は消化不良の原因で逆効果。液状・半液状（エネルギーゼリー等）なら直前でも有効。",
  },
  {
    topic: "③ 練習前の栄養補給",
    question: "空腹状態で練習に入るとどうなる？",
    choices: [
      "集中力が切れてフォームが崩れ、怪我のリスクが上がる",
      "パフォーマンスが上がる",
      "特に何も変わらない",
      "筋肉が増える",
    ],
    answer: 0,
    explain: "グリコーゲン不足で練習に入ると高強度に耐えられず、集中力が切れフォームが崩れて怪我のリスクが跳ね上がる。",
  },

  // ---- #4 練習後のリカバリー食 ----
  {
    topic: "④ 練習後のリカバリー食",
    question: "練習後のリカバリー食は、理想としていつまでに摂る？",
    choices: ["30〜60分以内（遅くとも2時間以内）", "6時間以内", "翌朝でよい", "いつでもよい"],
    answer: 0,
    explain: "練習直後は筋肉の合成・修復スイッチが最も入る時間帯。理想は30〜60分以内、遅くとも2時間以内。",
  },
  {
    topic: "④ 練習後のリカバリー食",
    question: "リカバリー食の組み合わせは？",
    choices: [
      "炭水化物だけ",
      "脂質＋食物繊維",
      "たんぱく質（筋肉の材料）＋炭水化物（エネルギー補充）",
      "水だけ",
    ],
    answer: 2,
    explain: "たんぱく質＋炭水化物。鶏肉・魚・卵・プロテイン＋おにぎりやバナナ、100%果汁ジュースなど。",
  },
  {
    topic: "④ 練習後のリカバリー食",
    question: "帰宅や夕食まで時間が空くときのベストな対応は？",
    choices: [
      "夕食まで何も摂らない",
      "練習後すぐプロテイン、または鮭おにぎり＋ミルクプロテインをその場で摂る",
      "スナック菓子を食べる",
      "水を多めに飲むだけ",
    ],
    answer: 1,
    explain: "その場でプロテインを飲むか、鮭おにぎりとパックのミルクプロテインなどを摂るのがベスト。",
  },

  // ---- #5 夕食の量とタイミング ----
  {
    topic: "⑤ 夕食の量とタイミング",
    question: "夕食は就寝の何時間前までに食べ終えるのが理想？",
    choices: ["就寝の2〜3時間前", "就寝の10分前", "就寝の8時間前", "就寝の直後"],
    answer: 0,
    explain: "就寝の2〜3時間前までに食べ終えるのが理想。胃に食べ物が残ったまま寝ると深い眠りが妨げられる。",
  },
  {
    topic: "⑤ 夕食の量とタイミング",
    question: "夕食が就寝直前になるときに勧められる工夫は？",
    choices: [
      "就寝直前にドカ食いする",
      "分食（練習直後に軽食、帰宅後はおかずとスープだけ）",
      "夕食を完全に抜く",
      "揚げ物を多めに食べる",
    ],
    answer: 1,
    explain: "【分食】＝練習直後におにぎりなどの軽食を摂り、帰宅後は消化に良いおかずとスープだけにする。",
  },
  {
    topic: "⑤ 夕食の量とタイミング",
    question: "夕食のたんぱく質が特に役立つのはどんなとき？",
    choices: [
      "起きて活動しているとき",
      "寝ている間の成長ホルモンによる筋肉の修復・リカバリー",
      "テスト勉強のとき",
      "水分補給のとき",
    ],
    answer: 1,
    explain: "寝ている間、成長ホルモンで筋肉の修復・リカバリーが行われる。夕食のたんぱく質はその貴重な材料。",
  },

  // ---- #6 1日を通じた水分補給 ----
  {
    topic: "⑥ 1日を通じた水分補給",
    question: "日常のベースとなる1日の水分量の目安は？",
    choices: ["体重×30〜40ml", "体重×5ml", "1日500mlで十分", "喉が渇いたときだけ"],
    answer: 0,
    explain: "日常のベースは体重×30〜40ml（体重60kgなら1.8〜2.4L）が1日の基本。",
  },
  {
    topic: "⑥ 1日を通じた水分補給",
    question: "練習中の水分補給の目安は？",
    choices: [
      "20〜30分ごとに150〜200mlをこまめに（喉が渇く前に）",
      "練習後にまとめて1L",
      "喉が渇いてから500ml一気に",
      "練習中は飲まない",
    ],
    answer: 0,
    explain: "練習中は20〜30分ごとに150〜200mlを「喉が渇く前」にこまめに飲む。",
  },
  {
    topic: "⑥ 1日を通じた水分補給",
    question: "体重の何%の水分が失われると持久力・判断力などが明らかに低下する？",
    choices: ["わずか2%", "10%", "20%", "50%"],
    answer: 0,
    explain: "体重のわずか2%の水分喪失（体重60kgなら1.2kg減）で持久力・判断力・自律神経の機能が低下する。",
  },
];

/* =========================================================
   セクション定義（4分割）
   アスリートの1日の流れに沿って6テーマを4セクションにまとめる。
   ========================================================= */
const SECTIONS = [
  { title: "毎日の食事の土台", topics: ["① 朝食の量とバランス", "② 昼食の量とバランス"] },
  { title: "練習をはさむ栄養", topics: ["③ 練習前の栄養補給", "④ 練習後のリカバリー食"] },
  { title: "夜のリカバリー", topics: ["⑤ 夕食の量とタイミング"] },
  { title: "1日の水分補給", topics: ["⑥ 1日を通じた水分補給"] },
];

// 各問がどのセクションに属するか（QUIZ と同じ長さ）
const sectionOf = QUIZ.map((q) =>
  SECTIONS.findIndex((s) => s.topics.includes(q.topic))
);

// 各セクションの開始 index・問数・終了 index を算出
SECTIONS.forEach((s, i) => {
  s.start = sectionOf.indexOf(i);
  s.count = sectionOf.filter((x) => x === i).length;
  s.end = s.start + s.count - 1;
});

/* =========================================================
   ロジック
   ========================================================= */
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const sectionScreen = document.getElementById("section-screen");
const resultScreen = document.getElementById("result-screen");

const totalCountEl = document.getElementById("total-count");
const startBtn = document.getElementById("start-btn");
const resumeArea = document.getElementById("resume-area");
const resumeNote = document.getElementById("resume-note");
const statsLine = document.getElementById("stats-line");
const progressLabel = document.getElementById("progress-label");
const progressFill = document.getElementById("progress-fill");
const questionTopic = document.getElementById("question-topic");
const questionText = document.getElementById("question-text");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const feedbackMark = document.getElementById("feedback-mark");
const feedbackText = document.getElementById("feedback-text");
const nextBtn = document.getElementById("next-btn");

const sectionDoneTitle = document.getElementById("section-done-title");
const sectionScoreNum = document.getElementById("section-score-num");
const sectionScoreTotal = document.getElementById("section-score-total");
const sectionDots = document.getElementById("section-dots");
const sectionProgressText = document.getElementById("section-progress-text");
const sectionComment = document.getElementById("section-comment");
const sectionNextBtn = document.getElementById("section-next-btn");

const scoreNum = document.getElementById("score-num");
const scoreTotal = document.getElementById("score-total");
const scoreComment = document.getElementById("score-comment");
const reviewFilterEl = document.getElementById("review-filter");
const filterAllBtn = document.getElementById("filter-all");
const filterWrongBtn = document.getElementById("filter-wrong");
const reviewEl = document.getElementById("review");

let current = 0;
let score = 0;
let answered = false;
const results = [];
let reviewFilter = "all"; // 結果画面のレビュー絞り込み: "all" / "wrong"

/* ---------- localStorage への保存 ----------
   プライベートブラウズ等で localStorage が使えない場合でも
   画面が壊れないよう、読み書きはすべて try/catch で囲む。 */
const PROGRESS_KEY = "seikatsu-quiz:food:progress";
const STATS_KEY = "seikatsu-quiz:food:stats";

function storageGet(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function storageSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // 保存できない環境では保存しない（動作は継続する）
  }
}

function storageRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    // 同上
  }
}

// 次に出題する問題の index を渡して途中経過を保存する
function saveProgress(nextIndex) {
  storageSet(PROGRESS_KEY, {
    total: QUIZ.length,
    current: nextIndex,
    score,
    results: results.map((r) => ({ qi: r.qi, chosen: r.chosen, correct: r.correct })),
  });
}

// 保存された途中経過を読み込む。壊れている・問題数が変わった場合は null
function loadProgress() {
  const data = storageGet(PROGRESS_KEY);
  if (!data || data.total !== QUIZ.length) return null;
  if (typeof data.current !== "number" || data.current < 1 || data.current > QUIZ.length) return null;
  if (!Array.isArray(data.results) || data.results.length !== data.current) return null;

  const restored = [];
  for (const r of data.results) {
    const q = QUIZ[r.qi];
    if (!q) return null;
    restored.push({ q, qi: r.qi, chosen: r.chosen, correct: !!r.correct });
  }
  return {
    current: data.current,
    score: typeof data.score === "number" ? data.score : 0,
    results: restored,
  };
}

function loadStats() {
  const data = storageGet(STATS_KEY);
  const best = data && typeof data.best === "number" ? data.best : 0;
  const plays = data && typeof data.plays === "number" ? data.plays : 0;
  return { best, plays };
}

function recordStats(finalScore) {
  const stats = loadStats();
  storageSet(STATS_KEY, {
    best: Math.max(stats.best, finalScore),
    plays: stats.plays + 1,
  });
}

totalCountEl.textContent = QUIZ.length;

startBtn.addEventListener("click", startQuiz);
document.getElementById("resume-btn").addEventListener("click", resumeQuiz);
document.getElementById("retry-btn").addEventListener("click", startQuiz);
nextBtn.addEventListener("click", goNext);
sectionNextBtn.addEventListener("click", () => renderQuestion());
filterAllBtn.addEventListener("click", () => setReviewFilter("all"));
filterWrongBtn.addEventListener("click", () => setReviewFilter("wrong"));

initStartScreen();

// スタート画面に「前回の続きから」とベストスコア・挑戦回数を反映する
function initStartScreen() {
  const saved = loadProgress();
  if (saved) {
    resumeNote.textContent =
      `前回の続きがあります（${saved.results.length} / ${QUIZ.length}問 回答済み・${saved.score}問正解）。`;
    resumeArea.hidden = false;
    startBtn.textContent = "最初からやり直す";
    startBtn.className = "btn btn-secondary";
  } else {
    resumeArea.hidden = true;
    startBtn.textContent = "スタート";
    startBtn.className = "btn btn-primary";
  }

  const stats = loadStats();
  if (stats.plays > 0) {
    statsLine.textContent =
      `ベストスコア ${stats.best} / ${QUIZ.length}問　挑戦回数 ${stats.plays}回`;
    statsLine.hidden = false;
  } else {
    statsLine.hidden = true;
  }
}

function showScreen(screen) {
  [startScreen, quizScreen, sectionScreen, resultScreen].forEach(
    (s) => (s.hidden = s !== screen)
  );
  window.scrollTo(0, 0);
}

function startQuiz() {
  storageRemove(PROGRESS_KEY);
  current = 0;
  score = 0;
  results.length = 0;
  initStartScreen();
  renderQuestion();
}

// 保存された途中経過から再開する
function resumeQuiz() {
  const saved = loadProgress();
  if (!saved) {
    startQuiz();
    return;
  }
  current = saved.current;
  score = saved.score;
  results.length = 0;
  saved.results.forEach((r) => results.push(r));

  if (current >= QUIZ.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

function renderQuestion() {
  showScreen(quizScreen);
  answered = false;
  const q = QUIZ[current];
  const sIdx = sectionOf[current];
  const sec = SECTIONS[sIdx];

  progressLabel.textContent =
    `セクション${sIdx + 1}「${sec.title}」　第${current - sec.start + 1}問 / ${sec.count}問`;
  progressFill.style.width = `${(current / QUIZ.length) * 100}%`;

  questionTopic.textContent = q.topic;
  questionText.textContent = q.question;

  choicesEl.innerHTML = "";
  q.choices.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.type = "button";
    btn.textContent = text;
    btn.addEventListener("click", () => selectChoice(i));
    choicesEl.appendChild(btn);
  });

  feedbackEl.hidden = true;
  nextBtn.hidden = true;
}

function selectChoice(index) {
  if (answered) return;
  answered = true;

  const q = QUIZ[current];
  const buttons = choicesEl.querySelectorAll(".choice");
  const isCorrect = index === q.answer;

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("is-correct");
    if (i === index && !isCorrect) btn.classList.add("is-wrong");
  });

  if (isCorrect) score++;
  results.push({ q, qi: current, chosen: index, correct: isCorrect });
  saveProgress(current + 1);

  feedbackMark.textContent = isCorrect ? "◯ 正解！" : "✕ 不正解";
  feedbackMark.className = "feedback-mark " + (isCorrect ? "ok" : "ng");
  feedbackText.textContent = q.explain;
  feedbackEl.hidden = false;

  if (current === QUIZ.length - 1) {
    nextBtn.textContent = "結果を見る";
  } else if (current === SECTIONS[sectionOf[current]].end) {
    nextBtn.textContent = "区切りへ進む";
  } else {
    nextBtn.textContent = "次の問題へ";
  }
  nextBtn.hidden = false;
}

function goNext() {
  const prevSec = sectionOf[current];
  current++;
  if (current >= QUIZ.length) {
    showResult();
  } else if (sectionOf[current] !== prevSec) {
    showSectionBreak(prevSec);
  } else {
    renderQuestion();
  }
}

function showSectionBreak(sIdx) {
  showScreen(sectionScreen);
  const sec = SECTIONS[sIdx];

  // このセクションの正解数を results から集計
  const secResults = results.filter((r) => SECTIONS[sIdx].topics.includes(r.q.topic));
  const secCorrect = secResults.filter((r) => r.correct).length;

  sectionDoneTitle.textContent = `「${sec.title}」クリア！`;
  sectionScoreNum.textContent = secCorrect;
  sectionScoreTotal.textContent = sec.count;

  sectionDots.innerHTML = "";
  SECTIONS.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i <= sIdx) dot.className = "on";
    sectionDots.appendChild(dot);
  });

  sectionProgressText.textContent = `${sIdx + 1} / ${SECTIONS.length} セクション完了`;

  const rate = secCorrect / sec.count;
  let msg;
  if (rate === 1) msg = "このセクションは全問正解！ その調子。";
  else if (rate >= 0.5) msg = "いい調子。間違えた問題は結果画面で復習しよう。";
  else msg = "むずかしかったね。あとで解説をもう一度読んでみよう。";
  sectionComment.textContent = msg + " ここで一息ついてOK。準備ができたら次へ。";

  const nextSec = SECTIONS[sIdx + 1];
  sectionNextBtn.textContent = nextSec
    ? `次のセクション「${nextSec.title}」へ`
    : "次のセクションへ進む";
}

function showResult() {
  showScreen(resultScreen);
  progressFill.style.width = "100%";

  storageRemove(PROGRESS_KEY);
  recordStats(score);
  initStartScreen();

  scoreNum.textContent = score;
  scoreTotal.textContent = QUIZ.length;

  const rate = score / QUIZ.length;
  let comment;
  if (rate === 1) comment = "全問正解！ 食事の知識はバッチリだね。";
  else if (rate >= 0.8) comment = "よくできました！ あと少しで満点。";
  else if (rate >= 0.5) comment = "いい調子。間違えた問題を復習しよう。";
  else comment = "もう一度資料を読んで、再チャレンジしてみよう。";
  scoreComment.textContent = comment;

  // 間違いが0件のときは絞り込みを出さない
  const wrongCount = results.filter((r) => !r.correct).length;
  reviewFilterEl.hidden = wrongCount === 0;
  setReviewFilter("all");
}

// レビュー一覧の絞り込みを切り替える
function setReviewFilter(mode) {
  reviewFilter = mode;
  filterAllBtn.classList.toggle("is-active", mode === "all");
  filterWrongBtn.classList.toggle("is-active", mode === "wrong");
  renderReview();
}

function renderReview() {
  reviewEl.innerHTML = "";
  results.forEach((r, i) => {
    if (reviewFilter === "wrong" && r.correct) return;

    const item = document.createElement("div");
    item.className = "review-item " + (r.correct ? "ok" : "ng");

    const q = document.createElement("p");
    q.className = "review-q";
    q.textContent = `第${i + 1}問　${r.q.question}`;

    const a = document.createElement("p");
    a.className = "review-a";
    const yourAns = r.q.choices[r.chosen];
    const rightAns = r.q.choices[r.q.answer];
    if (r.correct) {
      a.innerHTML = `<span class="mark-ok">◯</span> ${escapeHtml(rightAns)}`;
    } else {
      a.innerHTML =
        `<span class="mark-ng">✕</span> あなたの回答: ${escapeHtml(yourAns)}<br>` +
        `<span class="mark-ok">◯</span> 正解: ${escapeHtml(rightAns)}`;
    }

    const ex = document.createElement("p");
    ex.className = "review-explain";
    ex.textContent = r.q.explain;

    item.appendChild(q);
    item.appendChild(a);
    item.appendChild(ex);
    reviewEl.appendChild(item);
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}
