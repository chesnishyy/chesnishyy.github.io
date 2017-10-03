/**
 * Created by agent on 26.09.2016.
 */
var buttons = document.querySelector('.buttons');
var startDate;
//create button Start and handler for it
var buttonStart = document.querySelector('.button-start');

var timerId;

function handlerStart() {
    startDate = new Date().getTime();
    buttons.replaceChild(buttonPause, buttonStart);
    stopWatch();
}

buttonStart.addEventListener('click', handlerStart)

//create button Clear and handler for it
var buttonClear = document.querySelector('.button-clear');

function handlerClear() {
    var firstButton = buttons.firstElementChild;
    buttons.replaceChild(buttonStart, firstButton);
    clearTimeout(timerId);
    timer.innerHTML = milliToTime(zeroTime);
}

buttonClear.addEventListener('click', handlerClear);


//create button Pause and handler fot it

var pauseDate;
var buttonPause = document.createElement('button');
buttonPause.innerHTML = 'Pause';
buttonPause.setAttribute('class', 'button button-pause');

function handlerPause() {
    pauseDate = new Date().getTime();
    buttons.replaceChild(buttonContinue, buttonPause);
    clearTimeout(timerId);
    //console.log(time);
}

buttonPause.addEventListener('click', handlerPause);

//create button Continue

var continueDate;
var buttonContinue = document.createElement('button');
buttonContinue.innerHTML = 'Continue';
buttonContinue.setAttribute('class', 'button button-continue');

function handlerContinue() {
    continueDate = new  Date().getTime();
    buttons.replaceChild(buttonPause, buttonContinue);
    startDate = startDate + continueDate - pauseDate;
    stopWatch();
}

buttonContinue.addEventListener('click', handlerContinue);


/////////////////////////////////////////////////////////////////////////

var timer = document.querySelector('.timer');

var initTime = new Date().getTime();
var zeroTime = initTime - initTime;
timer.innerHTML = milliToTime(zeroTime);

function stopWatch() {
    var date = new Date();
    var time = date - startDate;
    timer.innerHTML = milliToTime(time);
    //setTimeout(arguments.callee, 1);
    timerId = setTimeout(stopWatch, 1);
}



function realToInt(num) {
    num = num - (num%1);
    return num;
}

function milliToTime(time) {
    var hours;
    var minutes;
    var seconds;
    var millisec;

    millisec = time % 1000;
    seconds = realToInt(time/1000) % 60;
    minutes = realToInt((time/1000)/60) % 60;
    hours = realToInt(((time/1000)/60)/60) %60;

    var formatTime = hours + ':' + minutes + ':' + seconds + ':' + millisec;

    return formatTime;
}









