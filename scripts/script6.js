 function printResult(){
    let inpt= inputRes();
    console.log(inpt)
    let val = validate(inpt);
    let res =func(val,inpt);
    if(res){
        document.getElementById("res").innerHTML = "true";
    }else{
        document.getElementById("res").innerHTML = "false";

    }
} 

function func(isCorrect, inp3){
    if(isCorrect){
    r1 = inp3[0][0]; x1 = inp3[0][1]; y1 = inp3[0][2];
    r2 = inp3[1][0]; x2 = inp3[1][1]; y2 = inp3[1][2];
    let c = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1), 2));
    console.log(c);
    let rSum = r2+r1;
    console.log(rSum);

    if(c<rSum)
    return true;
    else
    return false;
    } 

}
function validate(inp3){
    let isCorrect = true;
    console.log("inp3[0].length = "+inp3[0].length);
    console.log("inp3[1].length = "+inp3[1].length);

    if(inp3[0].length != 3 || inp3[1].length != 3){
        isCorrect = false;
        alert("Неверное количество аргументов или пробелов")
    }
    for(let i=0; i<inp3[0].length; i++){
        if(Number.isNaN(inp3[0][i]) || Number.isNaN(inp3[1][i])){
        alert("Incorrect type of data");
        isCorrect = false;
        }
        if(!isCorrect)
        break;
        
    }
    if(inp3[0][0]<0 ||inp3[1][0]<0){
        alert("Введен радиус меньше нуля");
        isCorrect=false;
    }
    return isCorrect;
}

function inputRes(){
    let inp1=document.getElementById("inp1").value.split(" ").map(Number);
    let inp2=document.getElementById("inp2").value.split(" ").map(Number);
    
    return [inp1, inp2];
}



function answ(){
    let inp1=document.getElementById("inp1").value.split(" ").map(Number);
    let inp2=document.getElementById("inp2").value.split(" ").map(Number);
    let isCorrect = true;
    for(let i=0; i<inp1.length; i++){
        if(Number.isNaN(inp1[i]) || Number.isNaN(inp2[i])){
        alert("Incorrect type of data");
        isCorrect = false;
        }
        if(isCorrect)
        break;
        
    }
    if(isCorrect){
    r1 = inp1[0]; x1 = inp1[1]; y1 = inp1[2];
    r2 = inp2[0]; x2 = inp2[1]; y2 = inp2[2];
    let c = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1), 2));
    console.log(c);
    let rSum = r2+r1;
    console.log(rSum);

    if(c<rSum){
        document.getElementById("res").innerHTML = "true";
    }else{
        document.getElementById("res").innerHTML = "false";

    }
}
}
console.log(inputRes());