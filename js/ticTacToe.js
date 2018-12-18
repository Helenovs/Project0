// $(document).ready(function () {
let winner=player;
const game =  function (x){
let gameMassive= {};

  for (var j = 0; j <x; j++) {

    let key=j.toString();
    gameMassive[key]=[];
    gameMassive[key].length=x;
  }
return gameMassive;
}

temp=game(3);

// for (var key in temp) {
//   for (i=0; i<temp[key].length; i++) {
//    let line=temp[key];
//    line[i]=Math.round(Math.random());
//   }
// }
console.log(temp);
// let winner=player;

const checkWhoWins=function(arr){
 let  res={result: false, winner: player, type: ""};
 //rows
 for (let key in arr) {

   let eq=true;
   first=arr[key][0]
   for (let j=0; j<arr[key].length; j++){
      // console.log(arr[j][i]);
      if (first!==arr[key][j]) eq=false;
   }
   if (eq && first!=""){
     res.result=true;
     res.winner=first;
     res.type="rows";
     return res;
   }
 }

 //columns
 for (let i=0;i<arr[key].length;i++){
   let eq=true;
   first=arr[0][i]
   for (let key in arr) {

      // console.log(arr[j][i]);
      if (first!==arr[key][i]) eq=false;
   }
   if (eq && first!=""){
     res.result=true;
     res.winner=first;
     res.type="columns";
     return res;
   }
 }

//  diag
//  for (let z=0;z<2;z++){
//    eq=true;
//    if (z===0)first=arr[0][0]
//    else first=arr[arr.length-1][0];
//    for (let i=0;i<arr.length;i++){
//      for (let j=0;j<arr[i].length;j++){
//         // console.log(“el:“+arr[j][i]);
//         // console.log(“i:“+i.toString())
//         // console.log(“j:“+j.toString())
//         let ii=-1;
//         if (z===0)ii=i
//         else ii=arr.length-i-1;
//         if (i===j && first!==arr[ii][j]){
//           eq=false;
//           // console.log(“eq:”  )
//         }
//      }
//
//    }
//    if (eq){
//      res.result=true;
//      res.winner=first;
//      res.type=“diag”;
//      return res;
//    }
//  }
 return res;

}

// arrEx=[
//  [“1”,“0",“”],
//  [“0",“1”,“”],
//  [“1”,“0",“1”],
// ];
let result=checkWhoWins(temp);
console.log(result);

// })
