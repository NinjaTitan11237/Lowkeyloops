body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg,#fdf6f0,#f8ede3);
}

.texture {
  background-image: url('https://www.transparenttextures.com/patterns/fabric-of-squares.png');
}

.card {
  transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}

button {
  transition: all 0.2s ease;
}
