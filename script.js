document.addEventListener('DOMContentLoaded', function () {
    const codeEditor = document.getElementById('code-editor');
    const runButton = document.getElementById('run-button');
    const outputDiv = document.getElementById('output');

    runButton.addEventListener('click', function () {
        const code = codeEditor.value;
        
        try {
            // You can use an external API or a server to run the code here
            // For simplicity, we'll just execute JavaScript code directly
            const result = eval(code);
            outputDiv.textContent = result;
        } catch (error) {
            outputDiv.textContent = 'Error: ' + error.message;
        }
    });
});
