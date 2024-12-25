let btn1 = document.getElementById("myButton");
      let btn2 = document.getElementById("myButton2");
      let codeCopy = document.querySelector(".copyCode");

      let rgb1 = 'rgb(92,145,229)';
      let rgb2 = 'rgb(152,63,198)';
      const hexValues = () => {
        let myHexValues = "0123456789abcdef";
        let hexCode = "#";
        for (let i = 0; i < 6; i++) {
          hexCode += myHexValues[Math.floor(Math.random() * 16)];
        }
        return hexCode;
        // console.log(`Your hexCode is ${hexCode}`);
      };
      const handleBtn1 = () => {
        rgb1 = hexValues();
        document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2}`;
        codeCopy.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
        document.getElementById("myButton").innerText = `${rgb1}`;
      }

      const handleBtn2 = () => {
        rgb2 = hexValues();
        document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
        codeCopy.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2}) `;
        document.getElementById("myButton2").innerText = `${rgb2}`;
      }


      btn1.addEventListener("click", handleBtn1);
      btn2.addEventListener("click", handleBtn2);

      codeCopy.addEventListener('click',() => {
        let text = codeCopy.innerText;
        navigator.clipboard.writeText(text);
        alert(`Copied to your clipboard`);

      })