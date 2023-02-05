var boolean = false;
window.onload = () => {
  Notification.requestPermission().then((r) => {
    if (r === "granted") {
      boolean = true;
    }
  });
};
function notificaciones() {
  if (boolean) {
    new Notification("la aventura aguarda", {
      body: "seras capazde superar tu maximo puntaje?",
      icon: "https://facu323.github.io/PS29U3/Ios/32.png"
    });
  }
}
let interval = setInterval(notificaciones, 108000);
