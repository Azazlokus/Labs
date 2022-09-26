function printResult(f){

    document.getElementById("res").innerHTML = f;
}
function isPalindrom(s){
    let arr = s.split("");
    if(arr.length<=1){
        if(arr.length == 0)
        alert("Введена пустая строка");
        return true;
    }else{
        if(arr[0]==arr[arr.length-1]){
            console.log(arr);
            arr = arr.toString().substring(1,(length-1));
            return isPalindrom(arr)
        }else
        return false;
    }
}
function getString(){
    return document.getElementById("inp").value;
}
