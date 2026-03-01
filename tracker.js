function trackExecution(eventType = "Action utilisateur") {
    const trackingData = {
        event: eventType,
        timestamp: new Date().toLocaleString(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        resolution: `${window.screen.width}x${window.screen.height}`,
        location: window.location.href,
        referrer: document.referrer || "Accès direct"
    };

    // Récupération des logs existants
    let logs = JSON.parse(localStorage.getItem('pixel_logs')) || [];

    // Ajout d'un nouvel événement
    logs.push(trackingData);

    // Sauvegarde
    localStorage.setItem('pixel_logs', JSON.stringify(logs));

    console.log("Événement capturé :", eventType);
    
    // Mise à jour de l'interface (seulement si les éléments existent sur la page)
    const countElement = document.getElementById("eventCount");
    if (countElement) {
        countElement.textContent = logs.length;
    }
}

function displayLogs() {
    const logs = JSON.parse(localStorage.getItem('pixel_logs')) || [];
    const container = document.getElementById("logContainer");
    
    if (!container) return;
    
    container.innerHTML = "";

    if (logs.length === 0) {
        container.innerHTML = "<p>Aucune donnée n'a encore été collectée.</p>";
        return;
    }

    logs.forEach((log, index) => {
        const div = document.createElement("div");
        div.className = "log-entry";
        div.innerHTML = `
            <strong>Événement #${index + 1} : <span style="color: #e74c3c;">${log.event}</span></strong><br>
            <small>Heure: ${log.timestamp}</small><br>
            <ul>
                <li><strong>User Agent :</strong> ${log.userAgent}</li>
                <li><strong>Langue :</strong> ${log.language}</li>
                <li><strong>Résolution :</strong> ${log.resolution}</li>
                <li><strong>URL :</strong> ${log.location}</li>
                <li><strong>Provenance :</strong> ${log.referrer}</li>
            </ul>
        `;
        container.appendChild(div);
    });
}

function clearLogs() {
    localStorage.removeItem('pixel_logs');
    const container = document.getElementById("logContainer");
    if (container) container.innerHTML = "";
    const countElement = document.getElementById("eventCount");
    if (countElement) countElement.textContent = "0";
}

//Pixel actif au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    trackExecution('Visite de la page (Automatique)');
    
    // Mise a jour du compteur affiché au chargement
    const logs = JSON.parse(localStorage.getItem('pixel_logs')) || [];
    const countElement = document.getElementById("eventCount");
    if (countElement) {
        countElement.textContent = logs.length;
    }
});