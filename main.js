const sock = new WebSocket(wsAddress);
const angleMsg = document.getElementById("angle");
const connectionState = document.getElementById("connection");

sock.addEventListener("open", (e) => {
  console.log("onOpen");
  connectionState.innerText = "Opened";
});

sock.addEventListener("message", (e) => {
  console.log(e.data);
});

sock.addEventListener("close", (e) => {
  console.log("onClose");
  connectionState.innerText = "Closed リロードしてください";
});

sock.addEventListener("error", (e) => {
  console.log("onError : " + e);
  connectionState.innerText = e;
});

btn.addEventListener("click", (e) => {
  sendEuler(0.0, 1.0, 2.0);
});

function sendEuler(alpha, beta, gamma) {
  sock.send(
    alpha.toString() +
      ":" +
      beta.toString() +
      ":" +
      gamma.toString() +
      "," +
      Date.UTC()
  );
  angleMsg.innerText = beta.toString();
}
