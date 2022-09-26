function input(){

var k = prompt("Введите количество элементов массива: ")
if (!Number.isInteger(+k)){
    alert("this is not number")
    
} else{
return k;
}
}

function fill(k){
    var array =[]
    let flag = false;
    //ввод
    for (let i =0; i<k; i++){
        array[i] = prompt()
        
    }
    //проверка
    if (array == null){
        alert("this is null")
    } else{
       
    for(let i=0; i<array.length; i++){
        if (!Number.isInteger(+array[i])){
            flag = true;
            break;
        }
    }
    if(flag){
        alert("error");
        
    } else{
    document.write("Введеный массив: "+array+"<br>");
    return array;
    }
    }
}

function findMax(array){
    maxD = Math.max(...array);
    document.write("Максимальный элемент: "+maxD+"<br>");
    return maxD;
}
       
        
function calculate(array, maxD, k){ 
        var steps = 0;
        for(let i=0; i<k; i++){
            document.write(i+1+"-ому элементу нужно добавить: " + (maxD-array[i])+"<br>");
            steps+=maxD-array[i];
        }
        document.write("Общее количество шагов: "+steps);
    
        return steps;
}
var inp = input()
var array = fill(inp);
calculate(array,findMax(array), inp);
