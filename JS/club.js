let list = document.querySelectorAll(".list");
let card = document.querySelectorAll(".card");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < card.length; k++) {
      card[k].classList.remove("active");
      card[k].classList.add("hide");

      if (
        card[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        card[k].classList.remove("hide");
        card[k].classList.add("active");
      }
    }
  });
}

// cursor
var cursor = document.querySelector('.cursor');
var cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove',function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX +
    "px; top: " + e.clientY + "px;";
});

// counting
let valueDisplayes = document.querySelectorAll('.count-text');
let interval = 1000;

valueDisplayes.forEach(valueDisplay => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function(){
    startValue +=1;
    valueDisplay.textContent = startValue;
    if(startValue == endValue){
      clearInterval(counter);
    }
  }, duration)
});