let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;
let h2=document.querySelector("h2");
let btns=["red","blue","pink","yellow"];


document.addEventListener("keydown", function() {
    if(started==false){
        console.log("Key pressed");
        started=true;
        levelUp();
    }
    });


function btnflash(button1 ){
    button1.classList.add("flash");
    setTimeout(function(){
        button1.classList.remove("flash");
    },600);
    gameSeq.push(button1.classList[1]);
    

}


function checkAnswer(idx){
    if(userSeq[idx] !== gameSeq[idx]){
        h2.innerText=`Game Over! Your score was Level ${level}. Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white"; 
        }, 150);
        
        resizeTo(); 
    } else{ 
        if(userSeq.length === gameSeq.length){
            console.log("Success: moving to next level");
            setTimeout(levelUp, 1000);
        }
    }
}


// function checkAnswer(idx){
//      console.log(`user sequence: ${userSeq}`);
//      console.log(`game sequence: ${gameSeq}`);
//         if(userSeq[idx] === gameSeq[idx]){
//             if(userSeq.length == gameSeq.length){
//                 console.log("success");
//                 setTimeout(levelUp,1000);
//             }else{
//                 h2.innerText="game over! press any key to restart";
//                 resizeTo();
//             }
//             console.log("     ");
//         }
// }

function userflash(button1 ){
    button1.classList.add("userflash");
    setTimeout(function(){
        button1.classList.remove("userflash");
    },300);
    usercolor=button1.classList[1];
    userSeq.push(usercolor);
    checkAnswer(userSeq.length-1);
}


function levelUp(){
    userSeq=[];
    level++; 
    h2.innerText=`level ${level}`;
    let randomNum=Math.floor(Math.random()*4);
    let randomColor=btns[randomNum];
    let randomBtn=document.querySelector(`.${randomColor}`);
    btnflash(randomBtn);
    }



function btnpress(){
    console.log("button pressed");
    userflash(this);
    
     
}

let allbtn=document.querySelectorAll(".button1");
for(btn of allbtn){
    btn.addEventListener("click", btnpress);
    
}

function resizeTo(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}
