const canvas = document.querySelector("#canvas");
const increment = document.querySelector(".toolbox__btn-inc");
const decrement = document.querySelector(".toolbox__btn-dec");
const colorInput = document.querySelector(".toolbox__input");
const clearWindow = document.querySelector(".toolbox__btn-x");
const colorNumber = document.querySelector(".toolbox__number");

let ctx = canvas.getContext("2d");

let x;
let y;
let size = 10;
let color = "black";
let isPressed;

clearWindow.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

increment.addEventListener("click", () => {
    size += 1;

    if (size >= 50) {
        size = 50;
    }
    colorNumber.innerHTML = size;
});
decrement.addEventListener("click", () => {
    size -= 1;

    if (size < 1) {
        size = 1;
    }
    colorNumber.innerHTML = size;
});

colorInput.addEventListener("change", (e) => {
    color = e.target.value;
});

canvas.addEventListener("mousedown", (e) => {
    x = e.offsetX;
    y = e.offsetY;

    isPressed = true;
});
canvas.addEventListener("mouseup", (e) => {
    x = undefined;
    y = undefined;

    isPressed = false;
});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
