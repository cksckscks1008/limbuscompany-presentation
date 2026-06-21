function checkLogin() {
  const userid = document.getElementById("userid").value;
  const userpw = document.getElementById("userpw").value;
  const errorMsg = document.getElementById("error-msg");

  if (userid === "sungchan" && userpw === "10081231") {
    errorMsg.innerText = "접근 허가. 로비로 이동합니다.";
    errorMsg.style.color = "#4CAF50";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 500);
  } else {
    errorMsg.innerText = "경고: 인증되지 않은 사용자입니다.";
    errorMsg.style.color = "#ff4d4d";
  }
}
