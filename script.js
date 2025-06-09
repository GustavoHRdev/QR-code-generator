document.getElementById('generate').addEventListener('click', () => {
  const text = document.getElementById('text').value.trim();
  const qrDiv = document.getElementById('qr');
  
  if (!text) {
    alert('Por favor, digite algum texto para gerar o QR Code');
    return;
  }

  const encodedText = encodeURIComponent(text);
  const size = 200;
  const timestamp = new Date().getTime();
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedText}&size=${size}x${size}&_=${timestamp}`;

  qrDiv.classList.add('loading');
  qrDiv.innerHTML = ''; // mostra só o loading

  const img = new Image();
  img.src = qrUrl;
  img.alt = 'QR Code';
  img.onload = () => {
    img.classList.add('loaded');
    qrDiv.classList.remove('loading');
    qrDiv.innerHTML = '';
    qrDiv.appendChild(img);
  };
});
