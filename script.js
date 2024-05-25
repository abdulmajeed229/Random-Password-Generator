let text = document.getElementById('text');
let btn = document.getElementById('btn');


let letter = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_'

btn.addEventListener('click' , function(){

let Password = '' ;

for( let i = 0 ;  i < 7 ; i++){

Password = Password + letter.charAt(Math.floor(Math.random()*letter.length));
}

text.value = Password
});
