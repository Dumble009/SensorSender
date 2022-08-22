const sock = new WebSocket(wsAddress);

sock.addEventListener("open", (e) => {
  console.log("onOpen");
});

sock.addEventListener("message", (e) => {
  console.log(e.data);
});

sock.addEventListener("close", (e) => {
  console.log("onClose");
});

sock.addEventListener("error", (e) => {
  console.log("onError : " + e);
});

btn.addEventListener("click", (e) => {
  sendEuler(0.0, 1.0, 2.0);
});

function sendEuler(alpha, beta, gamma) {
  sock.send(alpha.toString() + ":" + beta.toString() + ":" + gamma.toString());
}
