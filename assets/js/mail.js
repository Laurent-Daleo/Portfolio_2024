document.addEventListener("DOMContentLoaded", function () {
    // Initialisation d'EmailJS avec la clé publique
    emailjs.init("-wI9HDBR4cDsEMyHP");

    // Gestionnaire d'événement pour le formulaire
    document.querySelector(".contact-form").addEventListener("submit", function (e) {
        e.preventDefault(); // Empêche le rechargement de la page

        // Récupération des données du formulaire
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Création de l'objet de données
        const formData = {
            name: name,
            email: email,
            phone: phone,
            message: message,
        };

        // Envoi via EmailJS
        emailjs.send("service_7t9ddh4", "template_asm5dn9", formData)
            .then(function (response) {
                console.log("Message envoyé avec succès :", response);
                alert("Votre message a bien été envoyé !");
                document.querySelector(".contact-form").reset(); // Réinitialise le formulaire
            })
            .catch(function (error) {
                console.error("Erreur lors de l'envoi :", error);
                alert("Une erreur est survenue. Veuillez réessayer plus tard.");
            });
    });
});