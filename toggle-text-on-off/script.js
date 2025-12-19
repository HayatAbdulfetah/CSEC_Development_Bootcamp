const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");

let isOn = false; // Track current state

toggleBtn.addEventListener("click", () => {
    isOn = !isOn;

    if (isOn) {
        toggleText.textContent = "ON";
        toggleText.classList.add("toggle-on");
        toggleText.classList.remove("toggle-off");
        toggleBtn.textContent = "Turn OFF";

        document.body.classList.add("on");
        document.body.classList.remove("off");
    } else {
        toggleText.textContent = "OFF";
        toggleText.classList.add("toggle-off");
        toggleText.classList.remove("toggle-on");
        toggleBtn.textContent = "Turn ON";

        document.body.classList.add("off");
        document.body.classList.remove("on");
    }
});