
function NOD(){
    let A = document.getElementById("xy").value;
    let array = A.split(" ").map(Number);
    for(let i=0; i<array.length; i++)
    if(!Number.isInteger(array[i])){
        alert("Некорректный тип данных");
        break;
    } else{
    var n = array.length, x = Math.abs(array[0]);
    for (let i = 1; i < n; i++){
       let y = Math.abs(array[ i ]);
       while (x && y){ x > y ? x %= y : y %= x; }
       x += y;
     }
     document.getElementById("res").innerHTML = x;
    }
}

