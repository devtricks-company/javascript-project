const body = document.body;
const input = document.querySelector("#bgc");
const applyBtn = document.querySelector("#btn-apply");
const randomBtn = document.querySelector("#btn-random");

//hexcode
/*
    0...9
    10 - a
    11- b
    12 - c
    13 - d
    14- e
    15 - f
*/

function randomHexCharacter() {
  const r = Math.floor(Math.random() * 15);
  return r;
}

applyBtn.addEventListener("click", () => {
  body.style.backgroundColor = input.value;
});

randomBtn.addEventListener("click", () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const random = randomHexCharacter(); //0-15
    //15
    switch (random) {
      case 10:
        color += "a";
        break;
      case 11:
        color += "b";
        break;
      case 12:
        color += "c";
        break;
      case 13:
        color += "d";
        break;
      case 14:
        color += "e";
        break;
      case 15:
        color += "f";
        break;
      default:
        color += random;
        break;
    }
  }

  input.value = color;
});
