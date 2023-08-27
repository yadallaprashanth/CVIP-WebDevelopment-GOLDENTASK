document.addEventListener('DOMContentLoaded', function () {
    const codeEditor = document.getElementById('code-editor');
    const runButton = document.getElementById('run-button');
    const outputDiv = document.getElementById('output');

    runButton.addEventListener('click', function () {
        const code = codeEditor.value;
        
        try {
            const result = eval(code);
            outputDiv.textContent = result;
        } catch (error) {
            outputDiv.textContent = 'Error: ' + error.message;
        }
    });
});
