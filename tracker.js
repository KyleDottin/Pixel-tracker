function trackExecution(){
	const trackingData = {
		event: "Pixel loading",
		timestamp: new Date().toLocaleString(), // horodate
		userAgent: navigator.userAgent, // browser
		language: navigator.language, // System language
		resolution: `${window.screen.width}x${window.screen.height}`, // Screen size
		location: window.location.href
	};
	// Logs
	let logs = JSON.parse(localStorage.getItem('pixel_logs')) || [];
	logs.push(trackingData);
	
	localStorage.setItem('pixel_logs', JSON.stringify(logs));
	
	// Print to see if it works
	console.log('Pixel tracker activated');
	console.table(trackingData);
}