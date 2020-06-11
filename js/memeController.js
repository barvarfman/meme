'use strict'

var gXtxt;
var gYtxt;
var gElCanvas;
var gCtx;
var gFontSize = 40;
var gFontStyle = ' ' + 'impact1'
var space = ' ';
var gTextColor;
var gBorderColor = false;

function init() {
    gBorderColor = true;
    gTextColor = 'white';
    gElCanvas = document.getElementById('my-canvas');
    gCtx = gElCanvas.getContext('2d');
    resizeCanvas();
    gXtxt = (gElCanvas.width) / 2;
    gYtxt = (gElCanvas.height) / 4;
    var img = getImgs(2);
    var gMeme2 = getMeme()
    drawImg(img, gMeme2);
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth;
    gElCanvas.height = elContainer.offsetHeight;
}

function drawLine(x, y, xEnd = 250, yEnd = 250) {
    gCtx.beginPath()
    gCtx.moveTo(x, y)
    gCtx.lineTo(xEnd, yEnd)
    gCtx.closePath()
    gCtx.strokeStyle = 'red'
    gCtx.stroke();
}

function drawText(text, x, y) {
    gCtx.lineWidth = '2';
    gCtx.font = `${gFontSize}px${space}${gFontStyle}`;
    gCtx.textAlign = 'center';
    gCtx.fillText(text, x, y);
    if (gBorderColor) gCtx.strokeText(text, x, y);
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}


function drawImg(img, gMeme2) {
    var elImg = new Image();
    elImg.src = img;
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height);
        gCtx.fillStyle = gTextColor;
        drawText(gMeme2.lines[0].txt, gXtxt, gYtxt);
    }
}

function onUpdateText(ev) {
    if (isSign(ev.key)) updateText(ev.key);
    else if (ev.key === 'Backspace') backSpace(0);
    else if (ev.code === 'Space') Space(0);
    else updateText('');
    var gMeme2 = getMeme()
    var img = getImgs(2);
    drawImg(img, gMeme2);
}

function onDecrease() {
    gCtx.font = gFontSize--;
    drawImg(getImgs(2), getMeme());
}


function onIncrease() {
    gCtx.font = gFontSize++;
    drawImg(getImgs(2), getMeme());
}


function onTxtUp() {
    gCtx.font = gYtxt += 2;
    drawImg(getImgs(2), getMeme());
}

function onTxtDown() {
    gCtx.font = gYtxt -= 2;
    drawImg(getImgs(2), getMeme());
}


function onDelete() {
    deleteText(0);
    var elTxt = document.querySelector('.meme-text');
    elTxt.value = "";
    drawImg(getImgs(2), getMeme());
}



function onAlignToLeft() {
    gXtxt = 20;
    drawImg(getImgs(2), getMeme());
}

function onAlignToCenter() {
    gXtxt = gElCanvas.width / 2;
    drawImg(getImgs(2), getMeme());
}

function onAlignToRight() {
    gXtxt = gElCanvas.width;
    drawImg(getImgs(2), getMeme());
}

function onFontChange(el) {
    if (el.value === 'Impact') {
        gFontStyle = 'impact1';
        drawImg(getImgs(2), getMeme());
    }

    else if (el.value === 'monospace') {
        gFontStyle = 'monospace';
        drawImg(getImgs(2), getMeme());
    }

    else {
        gFontStyle = 'Montserrat1';
        drawImg(getImgs(2), getMeme());
    }
}

function onChangeColor(elColor) {
    gTextColor = elColor.value;
    drawImg(getImgs(2), getMeme());
}

function onBorderColor() {
    if (gBorderColor) gBorderColor = false;
    else gBorderColor = true;
    drawImg(getImgs(2), getMeme());
}

function onAddLine() {
    gYtxt+=50;
    drawImg(getImgs(2), getMeme());
}

function onTransferToEditor(){
var elMainGallery=document.querySelector('.hide-show-main-galery');
var elMainContent=document.querySelector('.hide-show-main-content');
console.log(elMainContent);
elMainGallery.style.display='none';
elMainContent.style.display='block';
init();
}

function onTransferToGalery(){
    var elMainGallery=document.querySelector('.hide-show-main-galery');
    var elMainContent=document.querySelector('.hide-show-main-content');
    console.log(elMainContent);
    elMainGallery.style.display='block';
    elMainContent.style.display='none';
    
    }