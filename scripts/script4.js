function calculate(){
    var inp = document.getElementById("inp").value;
    var array = (inp.split(" ")).map(Number);
    let res;
    for(let i=0; i<array.length; i++)
    if(Number.isNaN(array[i]) || array[i]<=0){
        alert("Некорректный тип данных");
        break;
    } else{
    if(array.length != 3){
        alert("Это не треугольник");
        break;
    } else{
        if(array[0]!=array[1] && array[1]!=array[2]
            && array[0] != array[2]){
            res = "Разносторонний треугольник"
        } else
        if(array[0]==array[1] && array[1]==array[2]){
            res = "Равносторонний треугольник"
        } else
        if(array[1] == array[0] || array[0] == array[2]||
            array[1] == array[2]){
            res = "Равнобедренный треугольник"
        } 
    document.getElementById("result").innerHTML = res;
    }
    }
}