"use strict"

/*
FAQ-funktionen hämtar alla frågor och lägger till en klickfunktion på dem.
När man klickar på en fråga visas eller döljs svaret.
Samtidigt byts plustecknet till minus när svaret är öppet
och tillbaka till plus när svaret stängs.
*/

/* Hämtar alla knappar i faq sektionen */

const faqButtons = document.querySelectorAll(".faq-item button");

/* Går igenom varje faq knapp */

faqButtons.forEach(function(button) {

    /* Lägger till en eventlyssnare körs när man klickar på en fråga*/
        button.addEventListener("click", function () {

            /* Hämtar svaret som ligger direkt efter knappen.
               I min HTML är det paragrafen som innehåller svaret.*/
            const answer = button.nextElementSibling;

            /*    Hämtar plustecknet som ligger inne i den fråga
                    som användaren har klickat på. */
            const icon = button.querySelector(".faq-icon");

            /* Kollar om svaret är öppet, om display är block visas svaret på sidan */
            if (answer.style.display === "block") {

                /* Döljer svaret genom att ändra display till none.
            Då syns inte paragrafen på sidan längre. */
                answer.style.display = "none";

        /* Byter tillbaka till plustecken när svaret stängs */
            icon.textContent = "+";

        } else {

            /* Visar svaret genom att ändra display till block.
            Paragrafen med svaret blir då synlig på sidan. */
            answer.style.display = "block";

            /* Byter plustecknet till minus för att visa att frågan är öppen. */
            icon.textContent = "-";
        }
    });
});
                   
