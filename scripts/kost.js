function calc(a){
    let b=32;
    let x=0;
    while(Math.pow(a,x)!=b)
        x++;
    console.log(x);
}
calc(2);