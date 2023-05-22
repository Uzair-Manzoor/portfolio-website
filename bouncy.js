/* bouncy Text */

const bouncy = document.querySelector(".bouncy");

bouncy.addEventListener("mouseenter", toggleRubberBand);

function toggleRubberBand(e){
  bouncy.classList.add("bouncing");
  bouncy.addEventListener("animationend", ()=>{
    bouncy.classList.remove("bouncing");
  });
}
