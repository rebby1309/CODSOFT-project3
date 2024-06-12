const display = document.querySelector(".display");
const buttons =  document.querySelectorAll("button");
const chars=["/","%","*","-","+","="];
let output="";

const calculate = (btnvalue) =>{
    
    if(btnvalue === "=" && btnvalue!== ""){
        output=eval(output.replace("%","/100"));
    }else if(btnvalue === "CC"){
        output="";
    }else if(btnvalue === "C"){
        output= output.toString().slice(0,-1);
    }else{
        if(output === "" && chars.includes(btnvalue)) return;
        output+=btnvalue;
    }
    display.value=output;
}
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})