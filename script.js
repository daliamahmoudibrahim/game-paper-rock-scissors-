const computerchoicedisplay=document.querySelector('#computerchoice');
const playerchoicedisplay=document.querySelector('#playerchoice');
const resultsisplay=document.querySelector('#result');
const choices=document.querySelectorAll('.images img');
let scoreplayerdisplay=document.querySelector('#scoreplayer');
let scorecomputerdisplay=document.querySelector('#scorecomputer');
const body=document.querySelector('body');
let playerchoice;
let computerchoice;
let scoreplayer=0;
let scorecomputer=0;
let result;




choices.forEach((choice)=>
choice.addEventListener('click',(e)=>{
 playerchoice=e.target.classList.value;
//  console.log(playerchoice);
 playerchoicedisplay.innerHTML=playerchoice;
 computer();
 result_diplay();
})
);



function computer(){
    computerchoice=Math.floor(Math.random() *3)+1;
   

    if(computerchoice==1){
        computerchoice='Rock';
    }
    if(computerchoice==2){
        computerchoice='Paper';
    }
    if(computerchoice==3){
        computerchoice='Scissors';
    }
    computerchoicedisplay.innerHTML=computerchoice;

}


function result_diplay(){
    if(computerchoice==playerchoice){
     scoreplayer++;
     scorecomputer++;
    }
    if(computerchoice==='Rock'&&playerchoice==='Scissors'){
        scorecomputer++;
    }
    if(computerchoice==='Scissors'&&playerchoice==='Paper'){
        scorecomputer++;
    }
    if(computerchoice==='Paper'&&playerchoice==='Rock'){
        scorecomputer++;
    }
    if(playerchoice==='Rock'&&computerchoice==='Scissors'){
        scoreplayer++;
    }
    if(playerchoice==='Scissors'&&computerchoice==='Paper'){
        scoreplayer++;
    }
    if(playerchoice==='Paper'&&computerchoice==='Rock'){
        scoreplayer++;
    }



   let button=document.createElement('button');
   button.textContent='Restart';
   button.classList.add('btn_display');

    scoreplayerdisplay.innerHTML=scoreplayer;
    scorecomputerdisplay.innerHTML=scorecomputer;
    if(scoreplayer===5){
        result='you Win!';
        resultsisplay.innerHTML=result;
        body.appendChild(button);
        choices.forEach((choice)=>{
    
           choice.classList.add('disable');
        });

       
        

      
        

    }
    if(scorecomputer===5){
       
        choices.forEach((choice)=>
        {
           choice.classList.add('disable');
        });
        result='The Computer Win!';
        resultsisplay.innerHTML=result;
        body.appendChild(button);
    

       

        
    }
   button.addEventListener('click',()=>{
   computerchoicedisplay.innerHTML=' ';
   playerchoicedisplay.innerHTML=' ';
   resultsisplay.innerHTML=' ';
   scoreplayerdisplay.innerHTML=' ';
   scorecomputerdisplay.innerHTML=' ';
   scorecomputer=0;
   scoreplayer=0;
   if(scorecomputer==0&&scoreplayer==0){
    body.removeChild(button);
    choices.forEach((choice)=>{
       choice.classList.remove('disable');
    });
   }
    console.log('the button work');
   })

    

}














