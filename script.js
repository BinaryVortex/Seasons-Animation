document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('seasonCanvas');
  const ctx = canvas.getContext('2d');
  const seasons = ['spring', 'summer', 'autumn', 'winter'];
  let currentIndex = 0;

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas(); // Initial resize

  const drawSpring = () => {
    ctx.fillStyle = '#87CEEB'; // Sky blue background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grass
    ctx.fillStyle = '#00FF7F';
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

    // Draw trees
    drawTree(200, canvas.height / 2, '#8B4513', '#228B22');
    drawTree(canvas.width - 200, canvas.height / 2, '#8B4513', '#228B22');

    // Draw flowers
    drawFlower(300, canvas.height / 2 + 100);
    drawFlower(canvas.width - 300, canvas.height / 2 + 150);
    
    // Draw butterflies
    drawButterfly(350, canvas.height / 2 + 70);
    drawButterfly(canvas.width - 350, canvas.height / 2 + 130);

    // Draw birds
    drawBird(150, 100);
    drawBird(canvas.width - 150, 150);
    drawBird(canvas.width / 2, 80);

    // Draw clouds
    drawCloud(150, 100);
    drawCloud(canvas.width - 150, 150);
    drawCloud(canvas.width / 2, 80);
  };

  const drawSummer = () => {
    ctx.fillStyle = '#87CEFA'; // Light blue sky
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw sea
    ctx.fillStyle = '#1E90FF';
    ctx.fillRect(0, canvas.height / 2 + 50, canvas.width, 100);

    // Draw waves
    drawWave(150, canvas.height / 2 + 80);
    drawWave(canvas.width - 150, canvas.height / 2 + 90);
    drawWave(canvas.width / 2, canvas.height / 2 + 85);

    // Draw sand
    ctx.fillStyle = '#FFE4B5';
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

    // Draw beach umbrellas
    drawUmbrella(300, canvas.height / 2 + 30);
    drawUmbrella(canvas.width - 300, canvas.height / 2 + 60);

    // Draw beach balls
    drawBeachBall(350, canvas.height / 2 + 150);
    drawBeachBall(canvas.width - 350, canvas.height / 2 + 180);

    // Draw sun
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 100, 80, 0, Math.PI * 2, true);
    ctx.fill();
  };

  const drawAutumn = () => {
    ctx.fillStyle = '#FF8C00'; // Orange sky
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw ground
    ctx.fillStyle = '#A0522D';
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

    // Draw trees
    drawTree(200, canvas.height / 2, '#8B4513', '#D2691E');
    drawTree(canvas.width - 200, canvas.height / 2, '#8B4513', '#D2691E');

    // Draw leaves
    drawLeaf(250, canvas.height / 2 + 50);
    drawLeaf(canvas.width - 250, canvas.height / 2 + 70);
    drawLeaf(350, canvas.height / 2 + 120);
    drawLeaf(canvas.width - 350, canvas.height / 2 + 150);

    // Draw birds
    drawBird(150, 100);
    drawBird(canvas.width - 150, 150);
    drawBird(canvas.width / 2, 80);

    // Draw clouds
    drawCloud(150, 100);
    drawCloud(canvas.width - 150, 150);
    drawCloud(canvas.width / 2, 80);
  };

  const drawWinter = () => {
    ctx.fillStyle = '#ADD8E6'; // Light blue sky
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw snow
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

    // Draw snowman
    drawSnowman(canvas.width / 2, canvas.height / 2 + 50);

    // Draw trees
    drawTree(200, canvas.height / 2, '#8B4513', '#FFFFFF');
    drawTree(canvas.width - 200, canvas.height / 2, '#8B4513', '#FFFFFF');

    // Draw snowflakes
    drawSnowflake(300, 100);
    drawSnowflake(canvas.width - 300, 150);
    drawSnowflake(canvas.width / 2, 120);

    // Draw clouds
    drawCloud(150, 100);
    drawCloud(canvas.width - 150, 150);
    drawCloud(canvas.width / 2, 80);
  };

  const drawTree = (x, y, trunkColor, leavesColor) => {
    ctx.fillStyle = trunkColor;
    ctx.fillRect(x - 15, y - 50, 30, 50);
    ctx.fillStyle = leavesColor;
    ctx.beginPath();
    ctx.arc(x, y - 80, 40, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 20, y - 60, 30, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x - 20, y - 60, 30, 0, Math.PI * 2, true);
    ctx.fill();
  };

  const drawFlower = (x, y) => {
    ctx.fillStyle = '#FF69B4'; // Pink petals
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2, true);
      ctx.rotate((Math.PI / 2.5));
      ctx.fill();
    }
    ctx.fillStyle = '#FFD700'; // Yellow center
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2, true);
    ctx.fill();
  };

  const drawButterfly = (x, y) => {
    ctx.fillStyle = '#FF4500'; // Orange butterfly
    ctx.beginPath();
    ctx.ellipse(x, y, 10, 20, Math.PI / 4, 0, Math.PI * 2);
    ctx.ellipse(x + 10, y, 10, 20, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000000'; // Butterfly body
    ctx.fillRect(x - 2, y - 10, 4, 20);
  };

  const drawBird = (x, y) => {
    ctx.fillStyle = '#000000'; // Black bird
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 20, y + 10);
    ctx.lineTo(x + 40, y);
    ctx.fill();
  };

  const drawWave = (x, y) => {
    ctx.fillStyle = '#1E90FF';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + 20, y - 20, x + 40, y);
    ctx.quadraticCurveTo(x + 60, y + 20, x + 80, y);
    ctx.fill();
  };

  const drawUmbrella = (x, y) => {
    ctx.fillStyle = '#FF0000'; // Red umbrella
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 40, y);
    ctx.lineTo(x + 20, y - 40);
    ctx.fill();
    ctx.fillStyle = '#8B4513'; // Brown pole
    ctx.fillRect(x + 15, y, 10, 40);
  };

  const drawBeachBall = (x, y) => {
    ctx.fillStyle = '#FF0000'; // Red and white beach ball
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, true);
    ctx.fill();
  };

  const drawLeaf = (x, y) => {
    ctx.fillStyle = '#8B4513'; // Brown leaf
    ctx.beginPath();
    ctx.ellipse(x, y, 10, 20, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawSnowman = (x, y) => {
    ctx.fillStyle = '#FFFFFF'; // White snowman
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y - 40, 20, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y - 70, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.fillStyle = '#000000'; // Black hat
    ctx.fillRect(x - 15, y - 100, 30, 5);
    ctx.fillRect(x - 10, y - 75, 20, 30);
  };

  const drawSnowflake = (x, y) => {
    ctx.fillStyle = '#FFFFFF'; // White snowflake
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y + 10);
    ctx.lineTo(x, y + 20);
    ctx.lineTo(x - 10, y + 10);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y - 10);
    ctx.lineTo(x, y - 20);
    ctx.lineTo(x - 10, y - 10);
    ctx.closePath();
    ctx.fill();
  };

  const drawCloud = (x, y) => {
    ctx.fillStyle = '#FFFFFF'; // White cloud
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, true);
    ctx.arc(x + 15, y - 10, 20, 0, Math.PI * 2, true);
    ctx.arc(x + 30, y, 20, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  };

  const draw = () => {
    switch (seasons[currentIndex]) {
      case 'spring':
        drawSpring();
        break;
      case 'summer':
        drawSummer();
        break;
      case 'autumn':
        drawAutumn();
        break;
      case 'winter':
        drawWinter();
        break;
      default:
        console.log('Invalid season');
    }
  };

  const changeSeason = () => {
    currentIndex = (currentIndex + 1) % seasons.length;
    draw();
  };

  setInterval(changeSeason, 3000); // Change season every 3 seconds

  // Initial draw
  draw();
});
