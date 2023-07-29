
let h1Tag = document.querySelector('#msg');
let navTag = document.querySelector('nav');
h1Tag.innerText='hii, shekhar';


let MorningCalls =() =>{
    h1Tag.innerText='Good Morning, Shekhar';
    h1Tag.style.backgroundColor='#56CDE6';
    navTag.style.backgroundColor='#56CDE6';
    h1Tag.style.padding='15px';
    h1Tag.style.boxShadow='0 0 10px black';

}
let Afternooncalls =() =>{
    h1Tag.innerText='Good Afternoon, Shekhar';
    h1Tag.style.backgroundColor='#E8C250';
    navTag.style.backgroundColor='#E8C250';
    h1Tag.style.padding='15px';
    h1Tag.style.boxShadow='0 0 10px black';
}
let EveningCalls =() =>{
    h1Tag.innerText='Good Evening, Shekhar';
    h1Tag.style.backgroundColor='#EE7124';
    navTag.style.backgroundColor='#EE7124';
    h1Tag.style.padding='15px';
    h1Tag.style.boxShadow='0 0 10px black';
}
let NightCalls =() =>{
    h1Tag.innerText='Good Night, Shekhar';
    h1Tag.style.backgroundColor='#141738';
    navTag.style.backgroundColor='#141738';
    h1Tag.style.padding='15px';
    h1Tag.style.boxShadow='0 0 10px black';
}

//EventListener
// let sayGoodMorning = document.getElementById('gm-btn');

let sayGoodMorning = document.querySelector('#gm-btn');
sayGoodMorning.addEventListener("click", MorningCalls);
let sayGoodAfterNoon = document.querySelector('#af-btn');
sayGoodAfterNoon.addEventListener("click", Afternooncalls);
let sayGoodEvening = document.querySelector('#ge-btn');
sayGoodEvening.addEventListener("click", EveningCalls);
let sayGoodNight = document.querySelector('#gn-btn');
sayGoodNight.addEventListener("click", NightCalls);

//keyup Event
let textBox=document.getElementById('input');
textBox.addEventListener('keyup',function(){
    let hMsg=document.getElementById('h1-msg');
    let tvalue=textBox.value;
    hMsg.innerText=tvalue;
})

//change Event

let selectTag=document.getElementById('option');
selectTag.addEventListener('change',function(){
   let hTag=document.getElementById('option-msg');
   let selectValue=selectTag.value;
    hTag.innerText=selectValue; 
});
//password check
let passwordBox = document.getElementById('password');
let checkBox = document.getElementById('checkbox');
checkBox.addEventListener('change',function(){
    // passwordBox.setAttribute('type','text');
    let typeAttribute=passwordBox.getAttribute('type');
    if (typeAttribute==='password') {
        passwordBox.setAttribute('type','text');
    }
    else{
        passwordBox.setAttribute('type','password')
    }
});

//Range Event
let Rvalue=document.getElementById('range');
let svalue=document.getElementById('srange');
Rvalue.addEventListener('input',function(){
    let setValue =Rvalue.value;
    svalue.innerText=setValue;
});

// multiplyer
let Num1=document.getElementById('Num1');
let Num2=document.getElementById('Num2');

let rangeValue=document.getElementById('rangeValue');
 
let showNum1=document.getElementById('showNum1');
let showNum2=document.getElementById('showNum2');

let Result=document.getElementById('Result');
let Value,Value2;
Num2.addEventListener('input',function(){
    Value = Num2.value;
    showNum2.innerText = Value;
    rangeValue.innerText = Value;
    multiplyer();
});
Num1.addEventListener('keyup',function(){
    Value2 = Num1.value;
    showNum1.innerText=Value2;
    multiplyer();
})
let multiplyer=() =>{
    Result.innerText=Value*Value2;
}