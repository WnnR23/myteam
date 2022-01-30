const elClientCard = document.querySelectorAll(".mainabout-list-items-default");
const elClientText = document.querySelectorAll(".mainabout-list-items-active");
const elCardBtn = document.querySelectorAll(".card-btn");

elCardBtn.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.classList.toggle("card-btn-active");
    elClientCard[index].classList.toggle("rotate-180");
    elClientText[index].classList.toggle("rotate0");
  })
});