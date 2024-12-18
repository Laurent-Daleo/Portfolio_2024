document.querySelector(".contact-form").addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche la soumission classique

    const form = event.target; // Référence au formulaire
    const formData = new FormData(form);

    // Ajoutez les clés EmailJS nécessaires directement dans les données du formulaire
    formData.append('service_7t9ddh4');
    formData.append('template_id', 'template_o39r6wo');
    formData.append('user_id', '-wI9HDBR4cDsEMyHP');

    const success = sendFormData(formData); // Appel à la fonction d'envoi
    if (success) {
        alert('Your message has been sent!');
        form.reset(); // Réinitialise le formulaire en cas de succès
    } else {
        alert('Oops... Something went wrong. Please try again.');
    }
});

// Fonction pour envoyer les données via EmailJS
async function sendFormData(formData) {
    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json(); // Analyse de l'erreur renvoyée par l'API
            throw new Error(errorData.text || 'Unknown error occurred');
        }

        return true; // Succès : la fonction retourne `true`
    } catch (error) {
        console.error('Error sending form data:', error.message); // Log d'erreur pour le développeur
        return false; // Échec : la fonction retourne `false`
    }
}