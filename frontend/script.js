const API_BASE_URL = 'http://localhost:5000/api';

// Helper function to display results
function displayResult(elementId, message, isError = false) {
    const resultElement = document.getElementById(elementId);
    resultElement.innerHTML = message;
    resultElement.classList.add('show');
    resultElement.classList.toggle('error', isError);
    resultElement.classList.toggle('success', !isError);
}

// Helper function to make API calls
async function apiCall(endpoint, method = 'GET', data = null) {
    try {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            }
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

// Check health endpoint
async function checkHealth() {
    try {
        const result = await apiCall('/health');
        displayResult('status', 
            `<strong>✅ ${result.status}</strong><br>${result.message}<code>${JSON.stringify(result, null, 2)}</code>`,
            false
        );
    } catch (error) {
        displayResult('status', 
            `<strong>❌ Connection Error</strong><br>${error.message}`,
            true
        );
    }
}

// Say hello endpoint
async function sayHello() {
    const name = document.getElementById('nameInput').value || 'World';
    try {
        const result = await apiCall(`/hello?name=${encodeURIComponent(name)}`);
        displayResult('hello-result',
            `<strong>👋 ${result.message}</strong><code>${JSON.stringify(result, null, 2)}</code>`,
            false
        );
    } catch (error) {
        displayResult('hello-result',
            `<strong>❌ Error</strong><br>${error.message}`,
            true
        );
    }
}

// Echo data endpoint
async function echoData() {
    const data = document.getElementById('dataInput').value;
    
    if (!data.trim()) {
        displayResult('echo-result',
            '<strong>⚠️ Please enter some data first</strong>',
            true
        );
        return;
    }

    try {
        let jsonData;
        try {
            jsonData = JSON.parse(data);
        } catch {
            jsonData = { text: data };
        }

        const result = await apiCall('/echo', 'POST', jsonData);
        displayResult('echo-result',
            `<strong>✅ Data Echoed Successfully</strong><br>${result.message}<code>${JSON.stringify(result, null, 2)}</code>`,
            false
        );
    } catch (error) {
        displayResult('echo-result',
            `<strong>❌ Error</strong><br>${error.message}`,
            true
        );
    }
}

// Check API connection on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('WebInt Application loaded');
    console.log(`API Base URL: ${API_BASE_URL}`);
});
