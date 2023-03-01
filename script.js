let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let submit = document.getElementById("submit");

let errorMsg = document.getElementById("errorMsg");
let getNum;

num1.addEventListener("click",function(){
 getNum = document.getElementById("num1").textContent;
    num1.style.backgroundColor="#8a90aa"
    num1.style.color="#FFFFFF"
   
})
num2.addEventListener("click",function(){
 getNum = document.getElementById("num2").textContent;
    num2.style.backgroundColor="#8a90aa"
    num2.style.color="#FFFFFF"
   
})
num3.addEventListener("click",function(){
    getNum = document.getElementById("num3").textContent;
    num3.style.backgroundColor="#8a90aa"
    num3.style.color="#FFFFFF"
   
})
num4.addEventListener("click",function(){
    getNum = document.getElementById("num4").textContent;
    num4.style.backgroundColor="#8a90aa"
    num4.style.color="#FFFFFF"
    
})
num5.addEventListener("click",function(){
    getNum = document.getElementById("num5").textContent;
    num5.style.backgroundColor="#8a90aa"
    num5.style.color="#FFFFFF"
   
})

submit.addEventListener("click",function(){

    if(getNum == "" || getNum == null)
    {
        errorMsg.textContent="Please select any number"
    }
    else{
    page1.style.display="none";
    page2.style.display="visible";
    page2.style.display="block";
    document.getElementById("output").textContent="You selected "+ getNum +" out of 5";
    }
})
