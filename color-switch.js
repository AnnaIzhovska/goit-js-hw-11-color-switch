const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];


  const refs = {
    startButton: document.querySelector('[data-action="start"]'),
    stopButton: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
  }


  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const DELAY = 1000;

  const bodyChangeColor = {
    isActive: false,
    start() {
      if (this.isActive) {
         console.log('Уже активна кнопка "START", невозможно заново начать смену цветов!')
        return;
      }
      this.isActive = true;
      this.bodyChangeColor = 
      setInterval(() => {
        const min = 0;
        const max = colors.length - 1;
        let index = randomIntegerFromInterval(min, max);
        refs.body.style.backgroundColor = colors[index];
        console.log('Смена цвета')
      }, DELAY);
    },
    stop() {
      clearInterval(this.bodyChangeColor);
      this.isActive = false;
      console.log('Остановили смену цвета, нажали кнопку "STOP"')
    },
  };
  
  refs.startButton.addEventListener('click', bodyChangeColor.start.bind(bodyChangeColor));
  refs.stopButton.addEventListener('click', bodyChangeColor.stop.bind(bodyChangeColor));