const sock = new WebSocket("wss://aed9-49-251-112-64.ap.ngrok.io");

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
  sock.send("hello");
});
