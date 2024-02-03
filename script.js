var cCode=[];

var count=0;
var attempts=0;
var output=document.getElementById("output");

var c1=document.getElementById("code1");
var c2=document.getElementById("code2");
var c3=document.getElementById("code3");

c1.addEventListener('focus', clearInput);
c2.addEventListener('focus', clearInput);
c3.addEventListener('focus', clearInput);

function clearInput(event) {
    event.target.value = '';
}

for(var x=0;x<3;x++){
    cCode.push(Math.floor(Math.random()*9));
}
function crack(){

    count=0;
    attempts++;
    var guess=[c1.value,c2.value,c3.value];
    for(var x=0; x<cCode.length;x++){
        
        output.innerHTML+= checkNum(guess[x],cCode[x]);
    }
    if(count==3){
        
        output.innerHTML+="<br>🎉 congratulation!  you guessed it in "+attempts + "  attempts!<br>";
        
    }else{
        output.innerHTML+="<br>";
    }
}
function resetFields() {
    // Reset input fields
    c1.value = '';
    c2.value = '';
    c3.value = '';
    cCode = [];
    for (var x = 0; x < 3; x++) {
        cCode.push(Math.floor(Math.random() * 9));
    }
    // Reset attempts
    attempts = 0;
    output.innerHTML='';
}


function checkNum(a,b){
    if(a>b){return "L";}
    if(a<b){return "H";}
    if(a==b){
        count++;

        return a;
    }
}
