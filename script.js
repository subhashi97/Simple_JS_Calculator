function fn0(){
    let pervious = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = pervious + 0;
}

function fn1(){
    let pervious = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = pervious + 1;
}

function fn2(){
    let pervious = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = pervious + 2;
}

function fn3(){
    let pervious = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = pervious + 3;
}

function fn4(){
    let pervious = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = pervious + 4;
}

function fn5(){
    let pervious = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = pervious + 5;
}

function fn6(){
    let pervious = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = pervious + 6;
}

function fn7(){
    let pervious = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = pervious + 7;
}

function fn8(){
    let pervious = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = pervious + 8;
}

function fn9(){
    let pervious = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = pervious + 9;
}

function feraser(){
    let pervious = document.getElementById("display").innerHTML;
    let erasepre = pervious.slice(0,-1);
    document.getElementById("display").innerHTML = erasepre;
}

let op;
let fristsave;

function fnAD(){
 fristsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
     op = 1;
}

function fnMN(){
  fristsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
     op = 2;
}

function fnML(){
   fristsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
     op = 3;
}

function fnDV(){
     fristsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
     op = 4;
}

function fnEQ(){
    let secondsave = document.getElementById("display").innerHTML;
    
    if(op == 1 ){
        document.getElementById("display").innerHTML = parseInt(fristsave) + parseInt(secondsave) ;
       
    }

   else if(op == 2 ){
        let final = parseInt(fristsave) - parseInt(secondsave) ;
        document.getElementById("display").innerHTML = final;
       
    }
    
    else if(op == 3 ){
        let final = parseInt(fristsave) * parseInt(secondsave) ;
        document.getElementById("display").innerHTML = final;
       
    }

    else if(op == 4 ){
        let final = parseInt(fristsave) / parseInt(secondsave) ;
        document.getElementById("display").innerHTML = final;
       
    }

    else{
        document.getElementById("display").innerHTML = "invalid input";
    }
}

function fnAC(){
    document.getElementById("display").innerHTML = "0";
    op = 0;
}