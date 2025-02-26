const links = document.querySelectorAll(".header div a");
const span = document.querySelector(".header div span");
const desLists = document.querySelectorAll("#about li");

let wdth = [];
for (let i = 0; i < links.length; i++) {
  wdth[i] = links[i].offsetWidth;
}

span.style.height = "5px";

links.forEach((e, index) => {
  e.addEventListener("click", () => {
    const ul = document.querySelector("#about");
    const work = document.querySelector("#work");
    if (e.attributes.href.nodeValue === "#about") {
      ul.classList.add("border-animate");
    } 

    setTimeout(() => {
      ul.classList.remove("border-animate");
    }, 7000);
  });

  e.addEventListener("mouseover", () => {
    span.style.width = `${e.offsetWidth}px`;
    span.style.height = "100%";
    switch (index) {
      case 0:
        span.style.left = 0;
        break;
      case 1:
        span.style.left = `${wdth[index - 1]}px`;
        break;
      case 2:
        span.style.left = `${wdth[index - 1] + wdth[index - 2]}px`;
        break;
      case 3:
        span.style.left = `${
          wdth[index - 1] + wdth[index - 2] + wdth[index - 3]
        }px`;
        break;
    }
  });
  e.addEventListener("mouseleave", () => {
    span.style.left = `calc(50% - ${span.offsetWidth / 2}px`;
    span.style.height = "0";
  });
});

const age = () => {
  const date = {
    bdate: new Date("12/17/2000"),
    odate: new Date(),
  };

  let ddiff = date.odate - date.bdate;
  let secs = ddiff / 1000;
  let math = secs / (3600 * 24 * 365.25);
  let yrs = Math.trunc(math);
  return yrs;
};

const divYear = document.querySelector(".desc li h1 div");
divYear.textContent = `${age()} Years`;
