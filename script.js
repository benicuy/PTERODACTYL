document.getElementById('startButton').addEventListener('click', function() {
    fetch('/api/start-bot', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('status').innerText = 'Status: Running';
                fetchLogs(); // Fetch logs after starting the bot
            } else {
                alert('Failed to start bot: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

document.getElementById('stopButton').addEventListener('click', function() {
    fetch('/api/stop-bot', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('status').innerText = 'Status: Stopped';
            } else {
                alert('Failed to stop bot: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function fetchLogs() {
    fetch('/api/logs')
        .then(response => response.json())
        .then(data => {
            document.getElementById('logOutput').innerText = data.logs;
        })
        .catch(error => {
            console.error('Error fetching logs:', error);
        });
}

// Fetch logs every 5 seconds
setInterval(fetchLogs, 5000);
