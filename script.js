const answers = {
  q1: "c",
  q2: "b",
};
function handleSubmit() {
  const form = document.getElementById("quizForm");
  const formData = new FormData(form);
  let resultData = [];
  for (const [question, answer] of Object.entries(answers)) {
    const userAnswer = formData.get(question);
    resultData.push({ question, userAnswer, correctAnswer: answer });
  }
  localStorage.setItem("resultData", JSON.stringify(resultData));
  return true; // Allow form submission
}
