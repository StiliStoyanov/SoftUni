function extractText() {
    const array = Array.from(document.querySelectorAll('#items li'))
    const result = array.map(e => e.textContent).join('\n')

    document.getElementById('result').value = result
}