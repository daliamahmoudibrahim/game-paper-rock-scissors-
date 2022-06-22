function computerplay(){
    let arr=['PAPER','ROCK','SCISSORS'];

    i=Math.floor(Math.random()*3);
   // console.log(arr[i]);
   return arr[i];
}

const computerselection = computerplay();
// const playerSelection = (prompt('enter you choose',)).toUpperCase();
let resultplayer=0;
let resultcomputer=0;

console.log(playerSelection);
function playRound(playerSelection, computerselection) {
//    console.log(`${playerSelection} win ${computerselection}`);

   if(playerSelection=='PAPER'&&computerselection=='ROCE'||playerSelection=='ROCK'&&computerselection=='SCISSORS'||playerSelection=='SCISSORS'&&computerselection=='PAPER'){
    console.log(`you win!${playerSelection} win ${computerselection}`);
    resultplayer++;
   }else if(computerselection=='PAPER'&&playerSelection=='ROCK'||computerselection=='ROCK'&&playerSelection=='SCISSORS'||computerselection=='SCISSORS'&&playerSelection=='PAPER'){
    console.log(`you lose and computer win `);
    resultcomputer++;
  }
   else{
    console.log('it is equality');
    resultcomputer++;
    resultplayer++;
   }
}
  

 
 playRound(playerSelection, computerselection);
 console.log(`reslultplayer ${resultplayer}  resultcomputer ${resultcomputer}`);




    if(resultcomputer==5){
        console.log('computer win');
    }
    else{
        console.log('computer lose and you win');
    }

