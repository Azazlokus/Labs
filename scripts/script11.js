function printResult(){
    let str = getString();
    let isDate = validate(str);
    if(isDate){

    let days = ["Воскресенье", "Понедельник", "Вторник",
     "Среда", "Четверг", "Пятница", "Суббота"];
    let date = new Date(str);
    let day = days[date.getDay()];
    console.log(date);

    console.log(day);
    document.getElementById("res").innerHTML = day;
    }else{
        alert("Isn't date");
    }
}
function validate(str){
    return (new Date(str) !== "Invalid Date") && 
    !isNaN(new Date(str) 
    //&& str.length 
    );
}

function getString(){
    return document.getElementById("input").value;
}
