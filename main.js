var mainColor = '#000'
let fontSize = 8
let isDrawing = false;
var slider = document.getElementById("myRange");
var c = document.getElementById("myCanvas");
var h1 = document.getElementById("header1")
h1.style.color = mainColor
var ctx = c.getContext("2d");

function drawPath(e) {
    var coor = getCursorPosition(c, e)
    ctx.beginPath();
    ctx.fillStyle = mainColor;
    ctx.rect(coor[0], coor[1], fontSize, fontSize);
    ctx.fill();
}

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    return [x, y];
}

c.addEventListener('mousedown', e => {
    isDrawing = true;
});

c.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        drawPath(e);
    }
});

c.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        drawPath(e);
        isDrawing = false;
    }
});

slider.oninput = function() {
    fontSize = this.value;
}

function clearCan() {
    ctx.clearRect(0, 0, c.width, c.height);
}

function ccBlack() { mainColor = 'Black'; h1.style.color = 'Black' }
function ccRed() { mainColor = 'Red'; h1.style.color = 'Red' }
function ccYellow() { mainColor = 'Yellow'; h1.style.color = 'Yellow' }
function ccGreen() { mainColor = 'Green'; h1.style.color = 'Green' }
function ccBlue() { mainColor = 'Blue'; h1.style.color = 'Blue' }
function ccCyan() { mainColor = 'Cyan'; h1.style.color = 'Cyan' }
function ccBrown() { mainColor = 'Brown'; h1.style.color = 'Brown' }
function ccBisque() { mainColor = 'Bisque'; h1.style.color = 'Bisque' }
