function printResult(){
  let str = getString();
  console.log("String: "+str);
  let val = validate(str);
  console.log("Val is "+val);
  let inp = func(str,val);
  console.log("Inp: "+inp);
 
  document.getElementById("res").innerHTML= inp;

}

function func(inp, isCorrect){
  if(isCorrect){
      let formatter = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        
      });
      let inp1 =formatter.format(inp);
      console.log("Formatter:" + inp1);
      return inp1;
  }
    
}


 function validate(str){
  let isCorrect = true;
  red = /^[+-]?[0-9]+$/; 
  str1 = str.split("").map(Number);

  if(!red.test(str)){
    isCorrect = false;
  alert("wRR");
  }
  if(!isCorrect){
    alert("Not a number");
  }
  return isCorrect;
 }



function getString(){
  let str = document.getElementById("inp").value;
  console.log("Input: "+str);
  return str;
}

function answ(){
  let str = document.getElementById("inp").value;
  let isCorrect = true;

  for(let i=0; i<str.length; i++){
    if((str.charCodeAt(i)<48 || str.charCodeAt(i)>57)
    && str.charCodeAt(i)!=46 && str.charCodeAt(0)!=45
    && str.charCodeAt(i)!=44){
      isCorrect =false;
      
    }
  }
  console.log(isCorrect)
  if(isCorrect){
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      
    });
    let inp1 =formatter.format(str);
    document.getElementById("res").innerHTML= inp1;

  }else{
    alert("Error of data types");
  }

}

/* function answ(){
  let str = document.getElementById("inp").value;
  str1 = str.split("").map(Number);
  let isCorrect = true;
  for(let i=0; i<str1.length; i++)
    console.log(i+" "+typeof(str1[i]))
  for(let i=0; i<str1.length; i++){
    if(!Number.isInteger(str1[i])){
      isCorrect =false;
      
    }
  }
  console.log(isCorrect)
  if(isCorrect){
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      
    });
    let inp1 =formatter.format(str);
    document.getElementById("res").innerHTML= inp1;

  }else{
    alert("Error of data types");
  }

} */