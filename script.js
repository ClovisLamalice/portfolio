
const swiper = document.querySelector('#swiper');
const slide = document.querySelector('#slide');
const slide1 = document.querySelector('#slide1');


const urls = [
  'carte1.png',
  'carte2.png',
  'carte3.png',
  'carte4.png',
  'carte5.png'
];


let cardCount = 0;

function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 5],
    onDismiss: appendNewCard,
    onLike: () => {
      slide.style.animationPlayState = 'running';
      slide.classList.toggle('trigger');
    },
    onDislike: () => {
      slide1.style.animationPlayState = 'running';
      slide1.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}


for (let i = 0; i < 5; i++) {
  appendNewCard();
}

