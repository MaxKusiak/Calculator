let num1 = 0;
let num2 = 0;
let clear = 0;
let znak = "";
function clearShow(){
    document.querySelectorAll(".show")[0].innerHTML = "0";
    num1 = 0;
    num2 = 0;
    znak = "";
}
function onmoused(x){
    document.querySelectorAll(x)[0].style.backgroundColor = "lightgray";
}
function onmouseu(x){
    document.querySelectorAll(x)[0].style.backgroundColor = "gray";
}
function plus(){
    num1 = +document.querySelectorAll(".show")[0].innerHTML;
    // document.querySelectorAll(".show")[0].innerHTML = "0";
    clear = 1;
    znak = "+";
}
function minus(){
    num1 = +document.querySelectorAll(".show")[0].innerHTML;
    // document.querySelectorAll(".show")[0].innerHTML = "0";
    clear = 1;
    znak = "-";
}
function multi(){
    num1 = +document.querySelectorAll(".show")[0].innerHTML;
    // document.querySelectorAll(".show")[0].innerHTML = "0";
    clear = 1;
    znak = "*";
}
function delen(){
    num1 = +document.querySelectorAll(".show")[0].innerHTML;
    // document.querySelectorAll(".show")[0].innerHTML = "0";
    clear = 1;
    znak = "/";
}
function result(){
    num2 = +document.querySelectorAll(".show")[0].innerHTML;
    if(znak == "+"){
        document.querySelectorAll(".show")[0].innerHTML = num1 + num2;
        clear = 1;
        // document.querySelectorAll(".show")[0].innerHTML = "0";
    }else if(znak == "-"){
        document.querySelectorAll(".show")[0].innerHTML = num1 - num2;
        clear = 1;
        // document.querySelectorAll(".show")[0].innerHTML = "0";
    }else if(znak == "*"){
        document.querySelectorAll(".show")[0].innerHTML = num1 * num2;
        clear = 1;
        // document.querySelectorAll(".show")[0].innerHTML = "0";
    }else if(znak == "/"){
        if(num2 == 0){
            alert("Error");
            document.querySelectorAll(".show")[0].innerHTML = "0";
        }else{
            document.querySelectorAll(".show")[0].innerHTML = num1 / num2;
            clear = 1;
            // document.querySelectorAll(".show")[0].innerHTML = "0";
        }
    }
    num1 = 0;
    num2 = 0;
}

let parent = document.querySelectorAll(".parent")[0];
for(let i = 0; i < 9; i++){
    let button = document.createElement("div");
    button.textContent = i + 1;
    button.onclick = function() {
        if(clear == 1){
            clear = 0;
            document.querySelectorAll(".show")[0].innerHTML = "0"; 
        }
        if(document.querySelectorAll(".show")[0].innerHTML == "0"){
            document.querySelectorAll(".show")[0].innerHTML = "";
            document.querySelectorAll(".show")[0].innerHTML += button.textContent
        }else{
            document.querySelectorAll(".show")[0].innerHTML += button.textContent;
        }
    };
    button.onmousedown = function() {
        document.querySelectorAll(".b" + button.textContent)[0].style.backgroundColor = "lightgray";
    };
    button.onmouseup = function() {
        document.querySelectorAll(".b" + button.textContent)[0].style.backgroundColor = "gray";
    };
    // button.addEventListener('click', function() {
    //     document.querySelectorAll(".show")[0].innerHTML += this.toString(button.textContent);
    // });
    parent.appendChild(button);
    if(i % 3 == 2){
        let br = document.createElement("br");
        parent.appendChild(br);
    }
}
let button = document.createElement("div");
button.textContent = 0;
button.onclick = function() {
    if(clear == 1){
        clear = 0;
        document.querySelectorAll(".show")[0].innerHTML = "0"; 
    }
    if(document.querySelectorAll(".show")[0].innerHTML == "0"){
        document.querySelectorAll(".show")[0].innerHTML = "0";
    }else{
        document.querySelectorAll(".show")[0].innerHTML += button.textContent;
    }
};
button.onmousedown = function() {
    document.querySelectorAll(".b" + button.textContent)[0].style.backgroundColor = "lightgray";
};
button.onmouseup = function() {
    document.querySelectorAll(".b" + button.textContent)[0].style.backgroundColor = "gray";
};
parent.appendChild(button);
for(let i = 5; i < 14; i++){
    document.querySelectorAll("div")[i].classList.add("b" + (i - 4));
    document.querySelectorAll("div")[i].classList.add("basicButton");
}
document.querySelectorAll("div")[14].classList.add("b0");
document.querySelectorAll("div")[14].classList.add("basicButton");
// document.querySelectorAll("div")[14].style.width = "158px";