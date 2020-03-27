var inputVal = parseInt(document.getElementById('input').value);
var headNum = document.createElement("p");
var newNum = document.createTextNode("0");
var add = document.getElementById('add');
let sub = document.getElementById('subtract');
headNum.appendChild(newNum);
document.getElementById('number').appendChild(headNum);
parseInt(newNum);
let num = 0;



add.addEventListener('click', function() {
    var inputVal = parseInt(document.getElementById('input').value);
    var currentNum = parseInt(document.querySelector('p'));
    num += inputVal;
    document.getElementById('number').innerHTML = num;
})

sub.addEventListener('click', function() {
    var inputVal = parseInt(document.getElementById('input').value);
    var currentNum = parseInt(document.querySelector('p'));
    num -= inputVal;
    document.getElementById('number').innerHTML = num;
})






