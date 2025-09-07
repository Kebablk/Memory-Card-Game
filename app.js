let card = document.querySelectorAll(".card");
let cardImg = document.querySelectorAll(".card-img");
let arrayImg = ["🍕", "🍔", "🍟", "🌭", "🍿", "🥓"];
let cardValues = [...arrayImg, ...arrayImg];
let sortValues = cardValues.sort(() => Math.random() - 0.5);
let arr = [];
let arrImg = [];

for (let j = 0; j < card.length; j++) {
  card[j].addEventListener("click", () => {
    card[j].classList.add("animate__animated");
    card[j].classList.add("animate__flipInY");
    cardImg[j].textContent = sortValues[j];
    //Добавление карты в массив
    arr.push(cardImg[j]);
    arrImg.push(cardImg[j].textContent);

    //Условие, если карты совпадают
    if(arrImg[0] == arrImg[1]) {
    }

    //Условие, если карты не совпадают
    if (arr.length == 2 & arrImg[0] != arrImg[1]) {
      setTimeout(() => {
        arr[0].textContent = "?";
        arr[1].textContent = "?";
        for(let i = 0; i < card.length; i++) {
          card[i].classList.remove("animate__flipInY");
        }
      }, 1500);
    }

    //Условие, если карт открыто больше двух
    if(arr.length > 2 & arrImg.length > 2) {
      cardImg[j].textContent = sortValues[j];
      for(let i = 0; i < 2; i++) {
      arr.shift();
      arrImg.shift();
      }
    }
  });
}