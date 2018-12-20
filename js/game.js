// let player = 1;
//
//
// const switchPlayer = function(player){
//   if (player === 1) {
//     player = 0;
//     writeLog(player);
//     // return player;
//   } else {
//     player = 1;
//     writeLog(player);
//   }
//   // return player;
// }
let player = 1;
let gameFirstPlayer=1;
let globalResult={};
$(document).ready(function () {

  const switchPlayer = function(player){
    if (player === 1) {
      player = 0;

    } else {
      player = 1;
    }
    return player;
  }
  $('.field').on('click', function(){
      if (gameFirstPlayer===1) {
      $('.playerX').addClass("color");
      $('.playerO').removeClass("color");
    } else {
      $('.playerO').addClass("color");
      $('.playerX').removeClass("color");
    }
    let id=$(this).attr("id");

    if ($(this).children().hasClass('X')===false && $(this).children().hasClass('O')===false) {
      arrEx[id[0]][id[1]]=player;
      $(this).children().removeClass('X O');
      if (player===1) {
        $(this).children().addClass("X");
      } else {
        $(this).children().addClass("O");
      }


      player= switchPlayer(player);

      globalResult=checkWhoWins(arrEx);
      console.log(globalResult);
      if (globalResult.result) {
        gameFirstPlayer=switchPlayer(gameFirstPlayer);
        console.log("FirstPlayer", gameFirstPlayer);
    
      }
      return player;

    }

   })



})
