function splitText() {
    const inputText = document.getElementById('inputText').value;
    const maxChars = 140;
    const ignoreSpaces = document.getElementById('ignoreSpaces').checked;
    const ignoreNewlines = document.getElementById('ignoreNewlines').checked;

    let chunks = [];
    let currentChunk = '';
    let currentCount = 0;

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        let shouldCount = true;

        if ((ignoreSpaces && char === ' ') || (ignoreNewlines && char === '\n')) {
            shouldCount = false;
        }

        if (shouldCount) {
            currentCount++;
        }

        currentChunk += char;

        if (currentCount === maxChars || i === inputText.length - 1) {
            chunks.push(currentChunk);
            currentChunk = '';
            currentCount = 0;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    chunks.forEach((chunk, index) => {
        const chunkDiv = document.createElement('div');
        const chunkText = document.createElement('textarea');
        chunkText.readOnly = true;
        chunkText.value = chunk;

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
    }).catch((error) => {
        console.error('Failed to copy: ', error);
    });
}