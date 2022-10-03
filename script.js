const topBox = document.getElementsByClassName("top")[0];
      const startButton = document.getElementsByClassName("start-button")[0];
      const stopButton = document.getElementsByClassName("stop-button")[0];
      const textColor = document.getElementsByClassName("text-color")[0];
      const calcButton = document.getElementsByClassName("calc-button")[0];

      let timerId;
      let randomColor;

      startButton.onclick = function () {
        timerId = setInterval(changeColor, 1000);
      };

      function changeColor() {
        topBox.style.backgroundColor = randomColor;
        randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      }

      stopButton.onclick = function () {
        clearInterval(timerId);
        textColor.textContent = "номер цвета" + randomColor;
      };

      function calculatorClicks() {
        let clicks = +this.dataset.clicks;
        clicks += 1;
        this.dataset.clicks = clicks;
        calcButton.textContent = "на меня нажали " + clicks;

        let lastClickTime = 0;
        let clickCounter = 0;

        calcButton.addEventListener("click", function () {
          let currentClickTime = new Date().getTime();
          if (currentClickTime - lastClickTime < 1000) {
            calcButton.textContent = 0;
            calcButton.disabled = true;
            clicks = 0;
            // alert("часто нажимаешь!");
          } else {
            clicks += 1;
            calcButton.textContent = "на меня нажали " + clicks;
          }

          lastClickTime = new Date().getTime();
        });
      }

      calcButton.onclick = calculatorClicks;