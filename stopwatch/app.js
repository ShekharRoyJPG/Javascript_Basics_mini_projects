let count = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = 0;
//for stop increasing speed
let timeRunning = false;

//start Timer
let startTimer = () =>{
    count++;
    minutes = Math.floor((count / 100) / 60);
    seconds = Math.floor((count / 100)-(minutes * 60));
    milliseconds = Math.floor(count - (seconds * 100) - (minutes * 6000));
    document.querySelector('#minutes').innerText = leadingZero(minutes);
    document.querySelector('#seconds').innerText = leadingZero(seconds);
    document.querySelector('#m-seconds').innerText = leadingZero(milliseconds);
};
//click here to start button
let startButton = document.querySelector('#start-btn');
startButton.addEventListener('click',function(){
    if (!timeRunning) {
        interval =  setInterval(startTimer,10);
        timeRunning = true;
    } 
}); 
//click here to stop button
let stopButton = document.querySelector('#stop-btn'); 
stopButton.addEventListener('click',function(){
    clearInterval(interval);
});

//click here to reset button
let resetButton = document.querySelector('#reset-btn'); 
resetButton.addEventListener('click',function(){
    clearInterval(interval);
    count = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    interval = 0;
    timeRunning = false;
    document.querySelector('#minutes').innerText = '00';
    document.querySelector('#seconds').innerText = '00';
    document.querySelector('#m-seconds').innerText = '00';
});
//leading zero
let leadingZero = (time) =>{
    if (time <= 9) {
        return "0" + time;
    }
    else{
        return time;
    }
};