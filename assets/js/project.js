let projects = [];
let currentIndex = 0;

// Sélection des éléments dans le DOM
const projectTitle = document.querySelector(".project_title");
const projectDescription = document.querySelector(".works_description");
const projectImage = document.querySelector(".works_img");
const prevButton = document.querySelector(".previous_work");
const nextButton = document.querySelector(".next_work");

// Fonction pour afficher le projet actuel
function displayProject(index) {
    const project = projects[index];
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    projectImage.src = project.imageUrl;
}

// Charger les données JSON
fetch('/projects.json')
    .then(response => response.json())
    .then(data => {
        projects = data;
        displayProject(currentIndex); // Affiche le premier projet une fois les données chargées
    })
    .catch(error => console.error('Erreur de chargement du JSON:', error));

// Event listeners pour les boutons
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    displayProject(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projects.length;
    displayProject(currentIndex);
});
