"use strict"

/* Hämtar alla knappar i faq sektionen */

const faqButtons = document.querySelectorAll(".faq-item button");

/* Går igenom varje faq knapp */

faqButtons.forEach(function(button) {

    /* eventlyssnare körs när man klickar på en fråga*/
        button.addEventListener("click", function () {

            /* Hämtar svaret som ligger direkt efter knappen*/
            const answer = button.nextElementSibling;

            /* Hämtar plustecknet inne i knappen */
            const icon = button.querySelector(".faq-icon");

            /* Kollar om svaret är öppet*/
            if (answer.style.display === "block") {

                /* Döljer svaret */
                answer.style.display = "none";
                   /* Byter tillbaka till plustecken */
            icon.textContent = "+";

        } else {

            /* Visar svaret */
            answer.style.display = "block";

            /* Byter plustecknet till minus */
            icon.textContent = "-";
        }
    });
});
                   
