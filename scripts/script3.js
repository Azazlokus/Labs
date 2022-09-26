function calculate(){
    var str = document.getElementById("str").value;
    var len = Number(str.length);
    var red = len-Math.ceil(len/10);
    var res = str.slice(0,red);

    document.getElementById("result").innerHTML = res;

}