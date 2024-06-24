function splitText() {
    const inputText = document.getElementById('inputText').value;
    const maxChars = 140;
    let chunks = [];

    for (let i = 0; i < inputText.length; i += maxChars) {
        chunks.push(inputText.slice(i, i + maxChars));
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    chunks.forEach((chunk, index) => {
        const chunkDiv = document.createElement('div');
        const chunkText = document.createElement('textarea');
        chunkText.readOnly = true;
        chunkText.innerText = chunk;

        const copyButton = document.createElement('button');
        copyButton.innerText = 'コピー';
        copyButton.className = 'copy-button';
        copyButton.onclick = () => copyToClipboard(chunk);

        chunkDiv.appendChild(chunkText);
        chunkDiv.appendChild(copyButton);
        resultDiv.appendChild(chunkDiv);
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard');
    }
    ).catch((error) => {
        console.error('Failed to copy: ', error);
    });
}
