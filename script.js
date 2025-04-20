document.querySelector("form").addEventListener("submit", function (e){
      e.preventDefault();
      this.classList.add("submitted");
});


const toggles = document.querySelectorAll(".toggle-password");

toggles.forEach(toggle=>{
      toggle.addEventListener('click', ()=>{
            const targetID = toggle.getAttribute("data-target");
            const input = document.getElementById(targetID);

            if(input.type === "password"){
                  input.type = "text";
                  toggle.src='notshow.svg'
            } else {
                  input.type = "password";
                  toggle.src='show.svg'
            }
      });
});


const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confPassword");
const error = document.querySelector("#error");
const btn = document.querySelector("#btn");

btn.addEventListener('click', (e)=>{
        if(password.value !== confirmPassword.value){
            e.preventDefault();
            error.textContent="Passwords do not match";
            confirmPassword.style.borderColor = "crimson"
      } else {
            error.textContent="";
            confirmPassword.style.borderColor = "green"
        }
});
