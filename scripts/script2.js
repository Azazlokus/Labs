function func(){
    let x1 = Number(document.getElementById("x1").value);
   
    let y1 = Number(document.getElementById("y1").value);
    if(Number.isNaN(+x1) || Number.isNaN(+y1)){
        alert("Введите численное значение");
        
        throw new Error("Неверный тип данных");
        
    }
    
    var x2 = Number(document.getElementById("x2").value);
    var y2 = Number(document.getElementById("y2").value);
    if(Number.isNaN(+x2) || Number.isNaN(+y2)){
        alert("Введите численное значение");
        
        throw new Error("Неверный тип данных");
        
    }
    var result = Math.sqrt(Math.pow((Math.abs(x1-x2)),2)+Math.pow((Math.abs(y1-y2)),2));
    document.getElementById("result").innerHTML = result;
    }