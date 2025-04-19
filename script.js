document.querySelector("form").addEventListener("submit", function (e){
      e.preventDefault();
      this.classList.add("submitted");
});