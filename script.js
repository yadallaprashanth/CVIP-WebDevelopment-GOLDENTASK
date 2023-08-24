// Initialize CodeMirror
const codeEditor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
    lineNumbers: true,
    mode: 'javascript', // You can change this to any other supported language
    theme: 'default',   // You can use different themes from the CodeMirror library
});

// You can also add event listeners for actions like saving the code
// For example:
// const saveButton = document.getElementById('save-button');
// saveButton.addEventListener('click', () => {
//     const code = codeEditor.getValue();
//     // Implement code saving logic here
// });
