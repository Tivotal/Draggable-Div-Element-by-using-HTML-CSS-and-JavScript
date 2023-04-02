/* Created by Tivotal */

let wrapper = document.querySelector(".wrapper");
let header = document.querySelector("header");

header.addEventListener("mousedown", () => {
  header.classList.add("active");
  header.addEventListener("mousemove", dragDiv);
});

function dragDiv({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(wrapper);
  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  wrapper.style.left = `${leftVal + movementX}px`;
  wrapper.style.top = `${topVal + movementY}px`;
}

header.addEventListener("mouseup", () => {
  header.classList.remove("active");
  header.removeEventListener("mousemove", dragDiv);
});
