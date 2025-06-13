const questions = [
  {
    text: "1. 혈변이 있었나요?",
    image: "images/q1.jpg"
  },
  {
    text: "2. 대변 모양이 가늘거나 이상했나요?",
    image: "images/q2.jpg"
  },
  {
    text: "3. 가스가 자주 차거나 배가 부른가요?",
    image: "images/q3.jpg"
  },
  {
    text: "4. 체중이 줄거나 만성피로를 느끼나요?",
    image: "images/q4.jpg"
  },
  {
    text: "5. 복부에 불편감이나 통증이 있나요?",
    image: "images/q5.jpg"
  }
];

let currentQuestion = 0;
let score = 0;

function startTest() {
  document.getElementById("main-screen").style.display = "none";
  document.getElementById("test-screen").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  const qBox = document.getElementById("question-box");

  qBox.innerHTML = `
    <p>${q.text}</p>
    <img src="${q.image}" alt="질문 이미지" />
    <label><input type="radio" name="answer" value="1"> 예</label>
    <label><input type="radio" name="answer" value="0"> 아니오</label>
  `;
}

function nextQuestion() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert("답변을 선택해주세요!");
    return;
  }

  score += parseInt(selected.value);
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("test-screen").style.display = "none";

  const resultDiv = document.getElementById("result");
  if (score === 0) {
    resultDiv.innerHTML = "✅ 현재는 특별한 위험 신호가 없지만, 정기적인 검진을 권장합니다.";
  } else if (score <= 2) {
    resultDiv.innerHTML = "⚠️ 위험 징후가 보입니다. 가까운 병원에 방문해보세요.";
  } else {
    resultDiv.innerHTML = "🚨 대장암 고위험군일 수 있습니다. 반드시 전문의의 진료를 받으세요!";
  }
}
