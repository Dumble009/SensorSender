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
  sock.send("hello");
});
