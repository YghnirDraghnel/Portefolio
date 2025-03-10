const faqDialogueBox = document.getElementById("faqDialogueBox");
const character2 = document.getElementById("character2");
const questions = document.querySelectorAll(".question-btn");
const faqMessage = document.getElementById("faqMessage"); 

const responses = {
    "Qui es-tu ?": "Je suis un étudiant actuellement en 3ème année de BUT MMI.",
    "Quelles sont tes compétences ?": "Je maîtrise HTML, CSS, JavaScript, ainsi que certains frameworks comme React et Tailwind CSS. Vous pouvez télécharger mon CV ici: <a href='./content/Cv.pdf' download='./content/Cv.pdf' class='text-red-500 underline'>Télécharger mon CV</a>",
    "Pourquoi ce personnage ?": `C'est assez simple, ce personnage me représente et que j'apprécie beaucoup. Ce dessin a été créé par une amie que vous pouvez retrouver ici: <a href='https://x.com/kyuukyuuchu' target='_blank' class='text-red-500 underline'>son Twitter</a>.`,
    "Qu'est-ce qui t'inspires ?": "Je m'inspire des jeux vidéo, mangas et animés que j'apprécie, d'où le dialogue lorsque vous arrivez sur ce site.",
    "Quels outils utilises-tu pour ton travail ?": "Pour développer j'utilise Visual Studio Code et pour l'hébergement local j'utilise Xampp.",
    "Quels sont tes hobbies ?": "J'apprécie jouer aux jeux vidéo, écouter de la musique, lire des mangas et manwha, regarder des vidéos et des streams, mais aussi, passer du temps en appel vocal avec des amis."
};

let currentAnswerBox = null; 

questions.forEach(button => {
    button.addEventListener("click", () => {
        const questionText = button.innerText.trim();
        const answer = responses[questionText];

        console.log("Question text:", questionText);
        console.log("Answer:", answer);

        if (!answer) return;


        character2.style.opacity = "1";

        questions.forEach(q => q.style.display = "none");

        if (currentAnswerBox) {
            currentAnswerBox.remove();
        }

        let answerBox = document.createElement('div');
        answerBox.classList.add('faq-answer');
        button.insertAdjacentElement('afterend', answerBox);

        currentAnswerBox = answerBox; 

        let index = 0;
        function typeWriterFAQ() {
            if (index < answer.length) {
                answerBox.innerHTML = answer.substring(0, index + 1);
                index++;
                setTimeout(typeWriterFAQ, 30);
            } else {
                setTimeout(() => {
                    faqMessage.style.display = "block"; 
                    faqMessage.classList.add('fadeIn');
                }, 1000); 
            }
        }
        typeWriterFAQ();

        setTimeout(() => {
            questions.forEach(q => q.style.display = "block");
            answerBox.style.opacity = "1";
        }, 6000);
    });
});
