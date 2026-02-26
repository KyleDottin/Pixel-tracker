function trackExecution(eventType = "Pixel loading") {

    const trackingData = {
        event: eventType,
        timestamp: new Date().toLocaleString(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        resolution: `${window.screen.width}x${window.screen.height}`,
        location: window.location.href
    };

    //Récupération des logs existants
    let logs = JSON.parse(localStorage.getItem('pixel_logs')) || [];

    //Ajout du nouvel événement
    logs.push(trackingData);

    //Sauvegarde
    localStorage.setItem('pixel_logs', JSON.stringify(logs));

    console.log("Événement enregistré :", eventType);
    console.table(trackingData);

    //Mise à jour compteur
    document.getElementById("eventCount").textContent = logs.length;
}

function displayLogs() {

    const logs = JSON.parse(localStorage.getItem('pixel_logs')) || [];
    const container = document.getElementById("logContainer");
    container.innerHTML = "";

    logs.forEach((log, index) => {

        const div = document.createElement("div");

        div.innerHTML = `
            <strong>Événement ${index + 1}</strong><br>
            Type : ${log.event}<br>
            Timestamp : ${log.timestamp}<br>
            User Agent : ${log.userAgent}<br>
            Langue : ${log.language}<br>
            Résolution : ${log.resolution}<br>
            URL : ${log.location}
        `;

        container.appendChild(div);
    });
}

function clearLogs() {
    localStorage.removeItem('pixel_logs');
    document.getElementById("logContainer").innerHTML = "";
    document.getElementById("eventCount").textContent = "0";
}