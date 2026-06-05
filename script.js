function search(){
  alert("Searching jobs...");
}

function clearFields(){
  document.querySelectorAll("input").forEach(i=>i.value="");
}

const cardsContainer = document.querySelector(".cards");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");

let scrollAmount = 0;

rightBtn.onclick = () => {
  scrollAmount += 200;
  cardsContainer.style.transform = `translateX(-${scrollAmount}px)`;
};

leftBtn.onclick = () => {
  scrollAmount -= 200;
  if(scrollAmount < 0) scrollAmount
   = 0;
  cardsContainer.style.transform = `translateX(-${scrollAmount}px)`;
};

// botão play
document.querySelector(".play").onclick = () => {
  alert("Abrir vídeo...");
};

// dots slider fake
const dots = document.querySelectorAll(".dots span");

dots.forEach((dot, index)=>{
  dot.onclick = () => {
    dots.forEach(d=>d.classList.remove("active"));
    dot.classList.add("active");
  };
});
