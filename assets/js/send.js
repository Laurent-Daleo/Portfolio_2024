document.querySelector(".contact-form").addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche la soumission classique

    const form = event.target; // Référence au formulaire
    const formData = new FormData(form);

    // Ajoutez les clés EmailJS nécessaires
    formData.append('service_id', '7t9ddh4');
    formData.append('template_id', 'asm5dn9');
    formData.append('user_id', '-wI9HDBR4cDsEMyHP');

    try {
        // Utilisation d'await pour attendre la réponse du fetch
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Your message has been sent!');
            form.reset(); // Réinitialise le formulaire après l'envoi
        } else {
            const errorData = await response.json(); // Parse le JSON d'erreur
            throw new Error(errorData.text || 'Something went wrong');
        }
    } catch (error) {
        alert('Oops... ' + error.message); // Affiche une erreur en cas de problème
    }
});
