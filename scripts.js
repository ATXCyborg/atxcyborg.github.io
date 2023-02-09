const randCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ[{]}_*%;';
let hackTexts = document.querySelectorAll(".hackText");

hackTexts.forEach(text => {
    text.addEventListener('mouseover', animateHackText)
    text.addEventListener('scroll', animateHackText)
    text.addEventListener('wheel', animateHackText)
});

function animateHackText(event){
  let iterations = 0;
  
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index]
        }
      
        return randCharacters[Math.floor(Math.random()*randCharacters.length)]
      })
      .join("");
    
    if (iterations >= event.target.dataset.value.length){
      clearInterval(interval);
    }
    
    iterations += Math.random();
  }, 50);
}
