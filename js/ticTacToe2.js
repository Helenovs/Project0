
const checkWhoWins=function(arr){
  // console.log("internal arr:",arr)
  let  res={result: false, winner: -1, type: ""};
  // console.log("globalResult:",globalResult);
  if (globalResult.result) {
   player=gameFirstPlayer;
   if (globalResult.winner===1)winCntX++;
   if (globalResult.winner===0)winCntO++;
   setResult();

   $('.field').children().removeClass('X O');
   arrEx=[
    ["","",""],
    ["","",""],
    ["","",""],
   ];
   $('.field').removeClass("blink");
   return res;
 }
 //rows
 for (let i=0;i<arr.length;i++){

   let eq=true;
   first=arr[i][0]
   ids="";
   for (let j=0;j<arr[i].length;j++){
      if (j!==0)ids+=",";
      ids+=i.toString()+j.toString();
      if (first!==arr[i][j]) {
        eq=false;
      }
   }
   if (eq && first!==""){
     res.result=true;
     res.winner=first;
     res.type="rows";
     res.ids=ids;
     // console.log(ids);
     arrBlink=res.ids.split(",");
     // console.log('arrBlink', arrBlink);
     for (let z=0;z<arrBlink.length;z++){
       $('#'+arrBlink[z]).addClass("blink");
       $('#'+arrBlink[z]).children().fadeOut(200).fadeIn(200);
     }
     return res;

   }
 }

 //columns
 for (let i=0;i<arr.length;i++){
   let eq=true;
   first=arr[0][i]
   ids="";
   for (let j=0;j<arr[i].length;j++){
     if (j!==0) ids+=",";
     ids+=j.toString()+i.toString();
      //writeLog2(arr[j][i]);
      if (first!==arr[j][i])eq=false;
   }
   if (eq && first!==""){
     res.result=true;
     res.winner=first;
     res.type="columns";
     res.ids=ids;
     arrBlink=res.ids.split(",");
     for (let z=0; z<arrBlink.length; z++) {
       $('#'+arrBlink[z]).addClass("blink");
       $('#'+arrBlink[z]).children().fadeOut(200).fadeIn(200);
     }
     return res;

   }

 }

 // diag
 for (let z=0;z<2;z++){
   // eq=true;
   ids="";
   eq=true;
   if (z===0)first=arr[0][0]
   else first=arr[arr.length-1][0];
   for (let i=0;i<arr.length;i++){
       for (let j=0;j<arr[i].length;j++){
          let ii;
          if (z===0)ii=i
          else ii=arr.length-i-1;
          if (i===j) {
            if (j!==0) ids+=",";
            ids+=ii.toString()+j.toString();
          }
            if (i===j && first!==arr[ii][j]){
              eq=false;
            }
       }
    }
   if (eq && first!==""){
     res.result=true;
     res.winner=first;
     res.type="diag";
     res.ids=ids;
     // console.log(ids);
     arrBlink=res.ids.split(",");
     // console.log('arrBlink', arrBlink);
       for (let z=0; z<arrBlink.length; z++){
         $('#'+arrBlink[z]).addClass("blink");
         $('#'+arrBlink[z]).children().fadeOut(200).fadeIn(200);
       }
     return res;
   }

 }
 eq=true;
 first=arr[0][0]
 for (let i=0;i<arr.length;i++){
     for (let j=0;j<arr[i].length;j++){
       if (arr[i][j]==="")eq=false;
     }
 }
 if (eq){
   noWinCnt++;
   setResult();
   $('.field').children().removeClass('X O');
   arrEx=[
    ["","",""],
    ["","",""],
    ["","",""],
   ];
 }
 return res;

}

let arrEx=[
 ["","",""],
 ["","",""],
 ["","",""],
];
