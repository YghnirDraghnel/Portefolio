const dialogues = [
    "Je vous souhaite la bienvenue sur mon site.",
    "Il est encore en construction, j'espère cependant qu'il vous plaira.",
    "Vous pourrez retrouver ici quelques-unes de mes productions avec quelques explications.",
    "Et bien sûr, si vous êtes curieux, je vous ai préparé quelques questions à mon propos.",    
    "Évidemment, si vous en avez d'autres ou si vous souhaitez me contacter pour un projet, n'hésitez pas à utiliser le formulaire en bas de page prévu à cet effet.",
    "Sur ce, je vous souhaite une agréable visite cher utilisateur."
  ];
  
  const dialogueBox = document.getElementById("dialogueBox");
  const character = document.getElementById("character");
  const overlay = document.getElementById("overlay");
  const skipButton = document.getElementById("skipButton");
  let dialogueIndex = 0;
  let typingTimeout;
  
  function showDialogue() {
    character.style.opacity = "1";
    dialogueBox.style.opacity = "1";
    overlay.style.opacity = "1";
    skipButton.style.opacity = "1";
    typeWriter(dialogues[dialogueIndex], 0);
  }
  
  function typeWriter(text, index) {
    if (index < text.length) {
        dialogueBox.innerHTML += text[index];
        typingTimeout = setTimeout(() => typeWriter(text, index + 1), 50);
    } else {
        setTimeout(nextDialogue, 1500);
    }
  }
  
  function nextDialogue() {
    dialogueIndex++;
    if (dialogueIndex < dialogues.length) {
        dialogueBox.style.opacity = "0";
        setTimeout(() => {
            dialogueBox.innerHTML = "";
            dialogueBox.style.opacity = "1";
            typeWriter(dialogues[dialogueIndex], 0);
        }, 500);
    } else {
        setTimeout(hideDialogue, 3000);
    }
  }
  
  function hideDialogue() {
    dialogueBox.style.opacity = "0";
    character.style.opacity = "0";
    overlay.style.opacity = "0";
    skipButton.style.opacity = "0";
    dialogueBox.classList.add('hidden-dialogue');
  
    setTimeout(() => {
        window.location.href = "clone.html"; 
    }, 1000);  
  }
  
  function skipDialogue() {
    clearTimeout(typingTimeout); 
    dialogueIndex = dialogues.length;
    hideDialogue();
  }
  
  skipButton.addEventListener("click", skipDialogue);
  window.onload = showDialogue;