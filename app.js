let start = false;
let level = 0;
let gameseq =[];
let userseq =[];
let h3 = document.querySelector("h3");  
let colorList = ['green','yellow','pink','purple'];

document.addEventListener("keypress",function(){
   if(start == false){
    levelup();
    start=true;
   }
    
})

function flashbtn(btn){
  
    btn.classList.add("gamechoose");
    setTimeout(function(){
        btn.classList.remove("gamechoose");
        
    },300)
    
    
}
function userflash(btn){
  
    btn.classList.add("userchoose");
    setTimeout(function(){
        btn.classList.remove("userchoose");
        
    },300)
    
  }
function levelup(){
    userseq=[];
    level++;
    
    h3.innerText=`Level: ${level}`
    let randomcoloridx = Math.floor(Math.random()*3);

    let randomcolor = colorList[randomcoloridx];
    let btn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);

    flashbtn(btn);
}
function checkAns(index){
   
    if(userseq[index]=== gameseq[index]){
        if(userseq.length == gameseq.length){
            setTimeout( levelup,1000);
        }
    }
    else{
        let body = document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout( function(){
            body.style.backgroundColor="white";
        },200);
        h3.innerText=`Game Over! Your score was ${level}
        Press any key to play again`;
        reset();
    }
}
function btnPress(){
    let btn=this;
        userflash(btn);
       let  userColor = btn.getAttribute("id");
       userseq.push(userColor);
      

        
    checkAns(userseq.length-1);
}


let btnAll = document.querySelectorAll("button");
for(btn of btnAll){
btn.addEventListener("click",btnPress);
}

function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    let h2 = document.querySelector("h2");
    h2.innerText=`Your Last Score : ${level-1}`;
    level=0;
}
