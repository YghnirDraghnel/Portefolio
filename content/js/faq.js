const faqDialogueBox = document.getElementById("faqDialogueBox");
const character2 = document.getElementById("character2");
const questions = document.querySelectorAll(".question-btn");
const faqMessage = document.getElementById("faqMessage"); 

const responses = {
    "Je veux en savoir plus sur toi.": `Je suis un étudiant actuellement en 3ème année de BUT MMI. <br> <br> J'utilise le personnage que vous voyez à l'arrivé sur mon site pour me représenter. Ce dessin a été créé par une amie que vous pouvez retrouver ici: <a href='https://x.com/kyuukyuuchu' target='_blank' class='text-red-500 underline'>son Twitter</a>. <br> <br> J'ai quelques hobbies. J'apprécie jouer aux jeux vidéo, écouter de la musique, lire des mangas et manwha, regarder des vidéos et des streams, mais aussi, passer du temps en appel vocal avec des amis.`,
    "Je veux en savoir plus sur toi dans l'aspect professionnel.": `Pour mes compétences: Je maîtrise HTML, CSS, JavaScript, ainsi que certains frameworks comme React et Tailwind CSS. Vous pouvez télécharger mon CV ici: <a href='./content/Cv.pdf' download='./content/Cv.pdf' class='text-red-500 underline'>Télécharger mon CV</a> <br> <br> Pour mes sites, je m'inspire des jeux vidéo, mangas et animés que j'apprécie, d'où le dialogue lorsque vous arrivez sur ce site et le système de FAQ. <br> <br> Lorsque je développe, j'utilise Visual Studio Code et pour l'hébergement local j'utilise Xampp.` 
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
        }, 20000);
    });
});
