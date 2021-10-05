let display = document.getElementById("display");
button = document.querySelectorAll("button");
let screenValue = " ";
for(item of button){
    item.addEventListener("click", (a)=> {
        text = a.target.innerText;
        console.log("Button text is ",text);
        if (text== "="){
            display.value = eval(screenValue);
    }
        else if(text =="C"){
            screenValue= " ";
            display.value =screenValue;
        }
        else{
            screenValue += text;
            display.value =screenValue;

        }
    })
} 