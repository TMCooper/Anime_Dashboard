// script_heurs.js
window.onload = function() {
    const heureElement = document.getElementById('heure');
    
    // Fonction pour obtenir l'heure actuelle et l'afficher
    function mettreAjourHeure() {
        const currentHour = new Date().toLocaleTimeString();
        heureElement.textContent = "Heure : " + currentHour;
    }

    // Mettre à jour l'heure toutes les secondes
    setInterval(mettreAjourHeure, 1000);
};