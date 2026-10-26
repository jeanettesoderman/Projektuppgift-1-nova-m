"use strict"

/*
Validerar kontaktformuläret när användaren försöker skicka det.
Kontrollerar att de viktigaste fälten är ifyllda innan formuläret godkänns.
*/

/* Hämtar kontaktformuläret */
const contactForm = document.querySelector(".contact-form form");

/* Hämtar formulärfälten så att vi kan kontrollera vad användaren har skrivit */
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

/* Lägger till en eventlyssnare som körs när användaren försöker skicka formuläret */
contactForm.addEventListener("submit", function (event) {

    /* Stoppar formuläret från att skickas direkt */
    event.preventDefault();

    /* Kollar om något av fälten är tomt */
    if (
        nameInput.value.trim() === "" || /* trim tar bort tomma mellanslag före och efter texten*/
        emailInput.value.trim() === "" || /* === "": kontrollerar om fältet fortfarande är tomt*/
        subjectInput.value.trim() === "" || /* || betyder eller. Så om namn eller e-post eller subject eller message är tomt visas meddelandet.*/
        messageInput.value.trim() === ""
    ) {
        /* Returnerar ett meddelande om något av fälten är tomt */
    alert("Please fill in all fields.");
    return;
}

    /* Kontrollerar att e-postadressen har rätt format */
    if (!emailInput.value.includes("@")) { /* kollar om det användaren skrivit innehåller @ */
        alert("Please enter a valid email address."); /* Om det inte innehåller @ skrivs fellmeddelande ut */
    return;
}

    /* Visas om alla fält är korrekt ifyllda */
    alert("Thank you! Your message has been sent.");

    /* Tömmer formuläret efter att det har godkänts */
    contactForm.reset();

});