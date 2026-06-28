// =====================
// بازی کارت و بمب 🃏
// =====================

let cardAmount = 0;
let cardMulti = 1;
let cardStarted = false;


function startCardGame(){

cardAmount = Number(
document.getElementById("cardAmount").value
);


if(!cardAmount){

alert("مبلغ را وارد کنید");
return;

}


cardMulti = 1;
cardStarted = true;

}



function selectCard(type){


if(!cardStarted){

alert("اول بازی را شروع کنید");
return;

}


if(type=="bomb"){


alert("💥 بمب خوردی");


cardMulti=1;


document.getElementById("cardProfit").innerHTML="0T";


document.getElementById("cardMulti").innerHTML="1.00x";


}

else{


cardMulti +=0.5;


document.getElementById("cardMulti").innerHTML=
cardMulti.toFixed(2)+"x";


document.getElementById("cardProfit").innerHTML=
(cardAmount*cardMulti)+"T";


}



}




function withdrawCard(){

alert("💰 برداشت انجام شد");

}





// =====================
// بازی موشک 🚀
// =====================


let rocketMulti=1;
let rocketTimer;



function startRocket(){


rocketMulti=1;


rocketTimer=setInterval(()=>{


rocketMulti+=0.1;


let box=document.getElementById("rocketMulti");


if(box){

box.innerHTML=
rocketMulti.toFixed(2)+"x";

}



if(Math.random()<0.03){


clearInterval(rocketTimer);


alert("🚀 موشک سقوط کرد");


}


},500);


}





function rocketWithdraw(){


clearInterval(rocketTimer);


alert(
"برداشت با ضریب "+
rocketMulti.toFixed(2)
);


}





// =====================
// مین یاب 💣
// =====================


let mines=[];

let mineMulti=1;



function createMines(count){


mines=[];


while(mines.length<count){


let x=Math.floor(Math.random()*25);


if(!mines.includes(x))

mines.push(x);


}


mineMulti=1;


alert("بازی آماده شد 💣");


}





function selectMine(number){


if(mines.includes(number)){


alert("💥 مین بود");


mineMulti=1;


}

else{


mineMulti+=0.25;


alert(
"💎 سالم\nضریب "+
mineMulti.toFixed(2)
);


}


}





function mineWithdraw(){


alert(
"برداشت با ضریب "+
mineMulti.toFixed(2)
);


}







// =====================
// بازی سکه ❤️👍
// =====================


let coinCount=1;

let coinChoice="❤️";




function setCoinCount(num){

coinCount=num;

}




function setCoinChoice(choice){

coinChoice=choice;

}




function playCoinGame(){


let result=[];


for(let i=0;i<coinCount;i++){


result.push(
Math.random()>0.5 ? "❤️":"👍"
);


}



let win=result.every(x=>x==coinChoice);



document.getElementById("coinResult").innerHTML=
result.join(" ");



if(win){

alert("🎉 برنده شدی");

}else{

alert("❌ باختی");

}



}




function coinWithdraw(){

alert("💰 برداشت");

}







// =====================
// صندوقچه 🧰
// =====================


let chestMulti=1;



function startChestGame(){


chestMulti=1;


document.getElementById("chestMulti").innerHTML="1.00x";


}




function openChestGame(number){



let chance=Math.random();



if(chance<0.33){


alert("🧰 صندوق پوچ بود");


chestMulti=1;


document.getElementById("chestProfit").innerHTML="0T";


}

else{


chestMulti+=0.5;


document.getElementById("chestMulti").innerHTML=
chestMulti.toFixed(2)+"x";


document.getElementById("chestProfit").innerHTML=
"سود افزایش یافت";


}



}




function chestWithdraw(){


alert(
"💰 برداشت با ضریب "+
chestMulti.toFixed(2)
);


}