let speech = new SpeechSynthesisUtterance();

document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    speech.lang = 'ru-RU';
    window.speechSynthesis.speak(speech)
})

