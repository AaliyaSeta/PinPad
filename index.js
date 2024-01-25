answer = 7866;
let pin ="";

function code(x){
    pin+=x;
    document.getElementById('pin').innerHTML=pin;
}

function reset(){
    document.getElementById('pin').innerHTML = pin="";
}

function check(){
    if(pin==answer){
        document.getElementById('lock').src = 'unlock.jpeg';
        alert("unlocked!")
        }
    else{
        alert('wrong')
    }
}
