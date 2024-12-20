import { sendMail } from './send.js';

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".contact_button").addEventListener("click", function (event) {
        event.preventDefault();

        // Récupération des champs et de leurs valeurs
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        // Récupération des éléments d'erreur
        const messageError = document.getElementById("error_message");

        // regex
        const nameRegex = /^[a-zA-Z]+$/;
        const emailRegex = /^[a-zA-Z]+\.[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^\d+$/;
        const textareaRegex = /^[a-zA-Z\s]+$/;

        let isValid = true;

        // Réinitialisation du message d'erreur
        messageError.innerHTML = "";

        if (!nameRegex.test(name)) {
            isValid = false;
            messageError.innerHTML += "Invalid name. Only alphabetic characters are allowed.<br>";
        }

        if (!emailRegex.test(email)) {
            isValid = false;
            messageError.innerHTML += "Invalid email format. It should be in the form of name.surname@domain.com.<br>";
        }

        if (!phoneRegex.test(phone)) {
            isValid = false;
            messageError.innerHTML += "Invalid phone number. Only digits are allowed.";
        }

        if (!textareaRegex.test(message)) {
            isValid = false;
            messageError.innerHTML += "Invalid message. Only alphabetic characters and spaces are allowed.";

        }

        if (isValid) {
            console.log("formulaire valide");
            sendMail()
        }
    });
});