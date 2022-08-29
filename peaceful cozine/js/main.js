 var form = document.querySelector("form");
 var btnNext = document.querySelector(".btn_next");
 var mainScreen = document.querySelector(".main__screen");
 var secondScreen = document.querySelector(".second__screen");
 var arrowBack = document.querySelector(".back");
 var valueEmail = document.querySelector(".value__email");
 var img = document.querySelector("figure");

validInput()
 btnNext.addEventListener("click", changeScreen);
 arrowBack.addEventListener("click",changeScreen);
 form.email.addEventListener("change",validInput)
 
 function changeScreen(event){
    event.preventDefault();
    mainScreen.classList.toggle("hidden");
    secondScreen.classList.toggle("hidden");
    getText()
    changeImg()
    validInput()
   }

 function getText(){
   var inputText = form.email.value;
   valueEmail.textContent = inputText   
   }

   function changeImg(){
      if(mainScreen.classList.contains("hidden")){
         img.style.backgroundImage = "url(assets/desktop/img-background2.jpg)"
       }
       else{
         img.style.backgroundImage = "url(assets/desktop/img-background.jpg)"
       }
   }

   function validInput(){
      if(form.email.value == ""){
         btnNext.disabled = true
      }else{
         btnNext.disabled = false
      }
   }


