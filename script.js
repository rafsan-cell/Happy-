function checkPin() {
  const pin = document.getElementById("pin").value;
  if (pin === "1234") {
    window.location.href = "memorylane.html";
  } else {
    document.getElementById("msg").innerText = "❌ Wrong PIN";
  }
}
