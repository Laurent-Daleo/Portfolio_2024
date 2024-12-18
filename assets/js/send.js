document.querySelector(".contact-form").addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Création d'un objet FormData à partir du formulaire
    const formData = new FormData(this);
    formData.append('service_id', 'service_7t9ddh4'); // Remplacez par votre ID de service
    formData.append('template_id', 'template_asm5dn9'); // Remplacez par votre ID de template
    formData.append('user_id', '-wI9HDBR4cDsEMyHP'); // Remplacez par votre clé publique

    // Envoi de la requête via fetch
    fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                alert('Your mail is sent!');
            } else {
                return response.json().then(err => {
                    throw new Error(err.text || 'Something went wrong');
                });
            }
        })
        .catch(error => {
            alert('Oops... ' + error.message);
        });
});
