// ---------- Question bank ----------
const questions = [
  { cat: "HTML", q: "Which tag is used for the largest heading?", options: ["<h6>", "<h1>", "<head>", "<heading>"], answer: 1 },
  { cat: "HTML", q: "Which attribute gives an image alternative text?", options: ["title", "src", "alt", "href"], answer: 2 },
  { cat: "HTML", q: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<nav>"], answer: 1 },
  { cat: "CSS", q: "Which property changes the text colour?", options: ["font-color", "text-style", "color", "background"], answer: 2 },
  { cat: "CSS", q: "Which CSS selector targets an element with id 'main'?", options: [".main", "#main", "main", "*main"], answer: 1 },
  { cat: "CSS", q: "Which value of display makes a flexible layout?", options: ["block", "inline", "flex", "none"], answer: 2 },
  { cat: "JavaScript", q: "Which keyword declares a constant variable?", options: ["var", "let", "const", "static"], answer: 2 },
  { cat: "JavaScript", q: "What does document.getElementById() return?", options: ["An array", "An element", "A string", "A number"], answer: 1 },
  { cat: "JavaScript", q: "Which symbol checks equality of value AND type?", options: ["=", "==", "===", "!="], answer: 2 },
  { cat: "Bootstrap", q: "Which class creates a responsive fixed-width container?", options: [".wrapper", ".container", ".box", ".frame"], answer: 1 },
  { cat: "Bootstrap", q: "How many columns are in the Bootstrap grid?", options: ["6", "10", "12", "16"], answer: 2 },
  { cat: "Bootstrap", q: "Which class makes a blue primary button?", options: [".btn-primary", ".button-blue", ".primary", ".btn-main"], answer: 0 }
];

const QUESTION_COUNT = 10;
const TIME_LIMIT = 20;

// ---------- Elements ----------
const $ = (id) => document.getElementById(id);
const screens = { start: $("startScreen"), quiz: $("quizScreen"), result: $("resultScreen") };

// ---------- State ----------
let current = [], index = 0, score = 0, answers = [], timeLeft = TIME_LIMIT, timerId = null, playerName = "";

// ---------- Helpers ----------
function show(name) {
  Object.entries(screens).forEach(([key, el]) => el.classList.toggle("d-none", key !== name));
}
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function getBest() {
  try { return Number(localStorage.getItem("quizBest")) || 0; } catch { return 0; }
}
function saveBest(value) {
  try { localStorage.setItem("quizBest", value); } catch {}
}

// ---------- Quiz flow ----------
function startQuiz() {
  playerName = $("playerName").value.trim();
  if (!playerName) {
    $("nameError").classList.remove("d-none");
    $("playerName").focus();
    return;
  }
  $("nameError").classList.add("d-none");

  const cat = $("category").value;
  const pool = cat === "All" ? questions : questions.filter((q) => q.cat === cat);
  current = shuffle(pool).slice(0, QUESTION_COUNT);
  index = 0; score = 0; answers = [];
  $("qTotal").textContent = current.length;
  show("quiz");
  loadQuestion();
}

function loadQuestion() {
  const item = current[index];
  $("qNumber").textContent = index + 1;
  $("progressBar").style.width = (index / current.length) * 100 + "%";
  $("questionText").textContent = item.q;
  $("feedback").classList.add("d-none");
  $("nextBtn").classList.add("d-none");

  const box = $("options");
  box.innerHTML = "";
  item.options.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = text;
    btn.addEventListener("click", () => selectAnswer(i));
    box.appendChild(btn);
  });
  startTimer();
}

function startTimer() {
  clearInterval(timerId);
  timeLeft = TIME_LIMIT;
  updateTimer();
  timerId = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) selectAnswer(-1); // time is up
  }, 1000);
}
function updateTimer() {
  const t = $("timer");
  t.textContent = timeLeft + "s";
  t.classList.toggle("low", timeLeft <= 5);
}

function selectAnswer(choice) {
  clearInterval(timerId);
  const item = current[index];
  const correct = choice === item.answer;
  if (correct) score++;
  answers.push({ q: item.q, chosen: choice, correct: item.answer, options: item.options, ok: correct });

  document.querySelectorAll(".option-btn").forEach((btn, i) => {
    btn.disabled = true;
    if (i === item.answer) btn.classList.add("correct");
    else if (i === choice) btn.classList.add("wrong");
  });

  const fb = $("feedback");
  fb.className = "alert " + (correct ? "alert-success" : "alert-danger");
  fb.textContent = correct
    ? "Correct!"
    : choice === -1
      ? "Time is up. The answer is: " + item.options[item.answer]
      : "Not quite. The answer is: " + item.options[item.answer];

  const last = index === current.length - 1;
  $("nextBtn").textContent = last ? "See results" : "Next question";
  $("nextBtn").classList.remove("d-none");
}

function nextQuestion() {
  index++;
  if (index < current.length) loadQuestion();
  else showResult();
}

function showResult() {
  const total = current.length;
  const percent = Math.round((score / total) * 100);
  $("progressBar").style.width = "100%";
  $("finalScore").textContent = score;
  $("finalTotal").textContent = total;
  $("statCorrect").textContent = score;
  $("statWrong").textContent = total - score;
  $("statPercent").textContent = percent + "%";

  let title, msg;
  if (percent >= 80) { title = "Excellent, " + playerName + "!"; msg = "You know your web development basics very well."; }
  else if (percent >= 50) { title = "Good job, " + playerName + "!"; msg = "A little more practice and you will master it."; }
  else { title = "Keep practising, " + playerName; msg = "Review the topics and try again."; }
  $("resultTitle").textContent = title;
  $("resultMsg").textContent = msg;

  if (score > getBest()) { saveBest(score); }
  $("bestScore").textContent = getBest();

  // Review list
  $("reviewList").innerHTML = answers.map((a, n) => `
    <div class="review-item ${a.ok ? "ok" : ""}">
      <strong>${n + 1}. ${a.q}</strong><br>
      Your answer: ${a.chosen === -1 ? "No answer" : a.options[a.chosen]}<br>
      ${a.ok ? "" : "Correct answer: " + a.options[a.correct]}
    </div>`).join("");

  show("result");
}

function restart() {
  document.getElementById("reviewBox").classList.remove("show");
  show("start");
}

// ---------- Events ----------
$("startBtn").addEventListener("click", startQuiz);
$("nextBtn").addEventListener("click", nextQuestion);
$("restartBtn").addEventListener("click", restart);
$("playerName").addEventListener("keydown", (e) => { if (e.key === "Enter") startQuiz(); });
$("bestScore").textContent = getBest();