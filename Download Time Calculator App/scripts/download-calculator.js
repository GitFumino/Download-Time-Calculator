function downloadTime() {
  const fileSize = document.getElementById('size').value;
  const downloadSpeed = document.getElementById('speed').value;
  const resultTime = document.querySelector('.js-result').value;

  let timeSeconds = fileSize * 1024 / (downloadSpeed / 8);
  timeSeconds = parseFloat(Math.round((timeSeconds) * 100) / 100);
  const timeMinutes = parseFloat(Math.round((timeSeconds / 60) * 100) / 100).toFixed(2);
  const timeHours = parseFloat(Math.round((timeMinutes / 60) * 100) / 100).toFixed(2);

  document.querySelector('.js-result').innerHTML = `Download time for this file is <br>
    ${timeHours} Hours or ${timeMinutes} Minutes or ${timeSeconds} Seconds.`;
}

function clearText() {
  document.getElementById('size').value = '';
  document.getElementById('speed').value = '';
  document.querySelector('.js-result').innerHTML = '';
}

document.getElementById('speed').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    downloadTime();
  }

  if (event.key === 'Shift') {
    clearText();
  }
})