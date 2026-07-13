var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');
var box9 = document.getElementById('box9');

var winingShow = document.getElementById('wining');

var count = 0;
var text = 'O'

function game(input) {

    print(input)

    winer()

    textChanger()



}

function print(input) {
    if (input === 'box1' && box1.innerHTML === '') {
        box1.innerHTML = text;
        count++
    } else if (input === 'box2' && box2.innerHTML === '') {
        box2.innerHTML = text;
        count++
    }
    else if (input === 'box3' && box3.innerHTML === '') {
        box3.innerHTML = text;
        count++
    }
    else if (input === 'box4' && box4.innerHTML === '') {
        box4.innerHTML = text;
        count++
    }
    else if (input === 'box5' && box5.innerHTML === '') {
        box5.innerHTML = text;
        count++
    }
    else if (input === 'box6' && box6.innerHTML === '') {
        box6.innerHTML = text;
        count++
    }
    else if (input === 'box7' && box7.innerHTML === '') {
        box7.innerHTML = text;
        count++
    }
    else if (input === 'box8' && box8.innerHTML === '') {
        box8.innerHTML = text;
        count++
    } else if (input === 'box9' && box9.innerHTML === '') {
        box9.innerHTML = text;
        count++
    }
}

function textChanger() {
    if (count % 2 === 0) {
        text = 'O';
    } else {
        text = 'X'
    }
}

function toEmpty() {
    box1.innerHTML = ''
    box2.innerHTML = ''
    box3.innerHTML = ''
    box4.innerHTML = ''
    box5.innerHTML = ''
    box6.innerHTML = ''
    box7.innerHTML = ''
    box8.innerHTML = ''
    box9.innerHTML = ''
    count = 0;
}

function winer() {
    if (box1.innerHTML !== '' && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
        winingShow.innerHTML = text + ' is winer!';
        setTimeout(toEmpty, 1500);
        text = 'O';
    } else if (box1.innerHTML !== '' && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
        winingShow.innerHTML = text + ' is winer';
        setTimeout(toEmpty, 1500);
        text = 'O';
    } else if (box2.innerHTML !== '' && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
        winingShow.innerHTML = text + ' is winer';
        setTimeout(toEmpty, 1500);
        text = 'O';
    } else if (box3.innerHTML !== '' && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
        winingShow.innerHTML = text + ' is winer';
        setTimeout(toEmpty, 1500);
        text = 'O';
    } else if (box4.innerHTML !== '' && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
        winingShow.innerHTML = text + ' is winer';
        setTimeout(toEmpty, 1500);
        text = 'O';
    } else if (box7.innerHTML !== '' && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
        winingShow.innerHTML = text + ' is winer';
        setTimeout(toEmpty, 1500);
        text = 'O';
    } else if (box1.innerHTML !== '' && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
        winingShow.innerHTML = text + ' is winer';
        setTimeout(toEmpty, 1500);
        text = 'O';
    } else if (box7.innerHTML !== '' && box7.innerHTML === box5.innerHTML && box7.innerHTML === box3.innerHTML) {
        winingShow.innerHTML = text + ' is winer';
        setTimeout(toEmpty, 1500);
        text = 'O';
    } else if (count === 9) {
        winingShow.innerHTML = 'Match Draw!'
        setTimeout(toEmpty, 1500);
        text = 'O';
    }
}


