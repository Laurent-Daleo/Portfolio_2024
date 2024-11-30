const selectedLanguages = document.getElementById(slideOne)

// Fonction pour charger les traductions via fetch
async function fetchTranslations() {
    try {
        const response = await fetch("/translation.json"); // Chemin vers le fichier JSON
        // console.log(response);

        if (!response.ok) {
            throw new Error("Erreur lors du chargement des traductions");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

function updateLangages(lang, translations) {
    document.querySelectorAll('[data-lang]').forEach((element) => {
        const dataKey = element.getAttribute("data-lang");
        if (translations[lang] && translations[lang][dataKey]) {
            element.textContent = translations[lang][dataKey];
        }
    })
}
function updatePlaceholders(lang, translations) {
    document.querySelectorAll('[data-lang-placeholder]').forEach((element) => {
        const placeholderKey = element.getAttribute("data-lang-placeholder");
        if (translations[lang] && translations[lang][placeholderKey]) {
            element.placeholder = translations[lang][placeholderKey];
        }
    });
}

async function setupLanguageSwitcher() {
    const translations = await fetchTranslations();
    if (!translations) return;

    const languageSwitch = document.getElementById("slideOne");
    const defaultLang = languageSwitch.checked ? "en" : "fr";
    updateLangages(defaultLang, translations);
    updatePlaceholders(defaultLang, translations);

    languageSwitch.addEventListener("change", () => {
        const selectedLang = languageSwitch.checked ? "en" : "fr";
        updateLangages(selectedLang, translations);
        updatePlaceholders(selectedLang, translations);
    });
}

function init() {
    setupLanguageSwitcher()
};

init()
