// let win=player;

const checkWhoWins=function(arr){
 let  res={result: false, winner: -1, type: ""};
 //rows
 for (let i=0;i<arr.length;i++){
   let eq=true;
   first=arr[i][0]
   for (let j=0;j<arr[i].length;j++){
      // console.log(arr[j][i]);
      if (first!=arr[i][j]) eq=false;
   }
   if (eq && first!=""){
     res.result=true;
     res.winner=first;
     res.type="rows";
     return res;
   }
 }

 //columns
 for (let i=0;i<arr.length;i++){
   let eq=true;
   first=arr[0][i]
   for (let j=0;j<arr[i].length;j++){
      // console.log(arr[j][i]);
      if (first!=arr[j][i])eq=false;
   }
   if (eq && first!=""){
     res.result=true;
     res.winner=first;
     res.type="columns";
     return res;
   }
 }

 //diag
 for (let z=0;z<2;z++){
   eq=true;
   if (z===0)first=arr[0][0]
   else first=arr[arr.length-1][0];
   for (let i=0;i<arr.length;i++){
     for (let j=0;j<arr[i].length;j++){
        // console.log(“el:“+arr[j][i]);
        // console.log(“i:“+i.toString())
        // console.log(“j:“+j.toString())
        let ii=-1;
        if (z===0)ii=i
        else ii=arr.length-i-1;
        if (i===j && first!==arr[ii][j]){
          eq=false;
          // console.log(“eq:”  )
        }
     }

   }
   if (eq){
     res.result=true;
     res.winner=first;
     res.type="diag";
     return res;
   }
 }
 return res;

}

let arrEx=[
 ["","",""],
 ["","",""],
 ["","",""],
];
let res=checkWhoWins(arrEx);
console.log(res);
