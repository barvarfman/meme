'use strict';

var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [{ id: 2, url: 'memeImg/2.jpg', keywords: ['happy'] }];

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red'
        },
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function getMeme() {
    return gMeme;
}

function getImgs(imgId) {
    var img = gImgs.find(function (img) {
        return imgId === img.id;
    })
    return img.url;
}


function updateText(text){
      gMeme.lines[0].txt+=text;
}


function isSign(key){
    var signs=['a','b','c','d','e','f',
    'v','g','h','i','j','k','l','m','n','o','p',
    'q','u','r','s','t','w','x','y','z','t','!','@','#','$','%','^','&','*','(',')','1',
'2','3','4','5','6','7','8','9','0'];
    var check = signs.find(function (sign) {
        return key === sign;
    })
    if(check) return true;
    return false
}


function removeLastChar(string){
    return string.substring(0, string.length - 1);
}

function backSpace(lineIdx){
    gMeme.lines[lineIdx].txt=removeLastChar(gMeme.lines[0].txt);
}


function Space(lineIdx){
    gMeme.lines[lineIdx].txt+=" ";

}


function deleteText(lineIdx){
    gMeme.lines[lineIdx].txt='';
}