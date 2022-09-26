class Name{
    fname;
    lname;
    fullname;
    ini;
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
        this.fullname = `${fname} ${lname}`;
        this.ini = `${this.lname[0]}.${this.fname[0]}`;

    }

}


//let submitBtn = document.getElementById("submit");

/* submitBtn.addEventListener("click", () => {
    let chel = document.getElementById("inp").value.split(" ");
    console.log(chel);
    let person = new Name(chel[0],chel[1]);
    console.log(person.fname, person.fullname, person.lname, person.ini);
}) */

let submitBtn = getButton("submit");
submitBtn.addEventListener("click",() =>{
    let person = getString("inp").trim().split(" ");
    console.log(person)
    if(person.length != 2){
        alert("Empty string");
        throw new Error("Empty string");
    }else{
    let abc = getString("inp");
    if(isCorrect(abc)){ 
    let personData = new Name(person[0], person[1]);
    document.getElementById("res").innerHTML = 
    "Имя: "+personData.fname+
    "; <br>Фамилия: "+personData.lname+
    "; <br>Имя и фамилия: "+personData.fullname+
    "; <br>Инициалы: "+personData.ini;
    }
}
})

function isCorrect(str){
    let correct = true;
    str = str.replace(/ /g,'')
    str = str.split("");
    for(let i=0; i<str.length; i++){
        if(!charIsLetter(str[i])){
            alert("Isnt corrext");
            correct = false;
        }
    }
    return correct;
}
function charIsLetter(char) {
    if (typeof char !== 'string') {
      return false;
    }
  
    return char.toLowerCase() !== char.toUpperCase();
  }
  
function getButton(name){
    return document.getElementById(name);
}
function getString(name){
    return document.getElementById(name).value;
}