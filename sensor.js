function requestDeviceSensor() {
  DeviceOrientationEvent.requestPermission().then(function (response) {
    if (response == "granted") {
      window.addEventListener("deviceorientation", onDeviceOrientation);
    }
  });
}

start.addEventListener("click", requestDeviceSensor);

function onDeviceOrientation(e) {
  e.preventDefault();
  sendEuler(e.alpha, e.beta, e.gamma);
}
