export function sendMail() {
    emailjs.init("-wI9HDBR4cDsEMyHP");

    const messageError = document.getElementById("error_message");
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // Utiliser send() au lieu de sendForm()
    emailjs.send("service_7t9ddh4", "template_o39r6wo", templateParams)
        .then(
            function (response) {
                console.log('SUCCESS!', response.status, response.text);
                messageError.innerText = "send successfully!";
                document.getElementById('formsending').reset();
            },
            function (error) {
                console.log('FAILED...', error);
                messageError.innerText = "error sending!";
            }
        );
}