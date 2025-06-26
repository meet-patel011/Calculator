let display = 
  document.querySelector(".display");

  
function press(num){
  let lastvalue = display.innerText.slice(-1);
  if(["+","-","*","/"].includes(lastvalue) &&
  ["+","-","*","/"].includes(num)){
    return;
  }

  display.innerText += num;
}

function operate(){
  
  if (display.innerText.includes("/0")){
    alert("You can't divide by Zero");
    return;
  }
  display.innerText = eval(display.innerText);
}

function clean(){
  display.innerText = "";
}

