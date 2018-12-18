// let player = 1;
//
//
// const switchPlayer = function(player){
//   if (player === 1) {
//     player = 0;
//     console.log(player);
//     // return player;
//   } else {
//     player = 1;
//     console.log(player);
//   }
//   // return player;
// }
let player = 1;
$(document).ready(function () {





  const switchPlayer = function(player){
    if (player === 1) {
      player = 0;
      // console.log(player);
      // return player;
    } else {
      player = 1;
      // console.log(player);
    }
    return player;
  }
  // player= switchPlayer(player);
console.log(player);
// let variab = player;


 $('.field').on('click', function(){
   console.log($(this).attr("id"));
   console.log('initial player', player);
   // console.log("switch", switchPlayer (player));
   player= switchPlayer(player);
   console.log('changed player', player);
   let result=checkWhoWins(arrEx);
   console.log(result);
return player;
  })

  $('#topLeft').on('click', function(){
    arrEx[0][0]=player;
  })

  $('#middleLeft').on('click', function(){
    arrEx[1][0]=player;
  })

  $('#bottomLeft').on('click', function(){
    arrEx[2][0]=player;
  })

  $('#topMiddle').on('click', function(){
    arrEx[0][1]=player;
  })

  $('#middleMiddle').on('click', function(){
    arrEx[1][1]=player;
  })

  $('#bottomMiddle').on('click', function(){
    arrEx[2][1]=player;
  })

  $('#topRight').on('click', function(){
    arrEx[0][2]=player;
  })

  $('#middleRight').on('click', function(){
    arrEx[1][2]=player;
  })

  $('#bottomRight').on('click', function(){
    arrEx[2][2]=player;
  })


})
