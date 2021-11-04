let btns = document.querySelectorAll(".btn");
let newText = document.querySelector(".newText");

btns.forEach(element => {
    element.addEventListener("click", (e)=>{
        if(e.target.classList.contains("dec")){
            newText.innerHTML = Number(newText.textContent) - 1; }        
        if(e.target.classList.contains("inc")){
            newText.innerHTML = Number(newText.textContent) + 1;}    
        if(e.target.classList.contains("reset")){
                newText.innerHTML = 0;}  
        if(Number(newText.textContent) < 0){
            e.target.parentElement.parentElement.style.background = "red"
        }
        if(Number(newText.textContent) > 0){
            e.target.parentElement.parentElement.style.background = "blue"
        }
        if(Number(newText.textContent) == 0){ e.target.parentElement.parentElement.style.background = "linear-gradient(rgba(57,157,57,.8),rgba(95,95,195,.6),rgba(120,220,220,.7))"
        }
    })
});







