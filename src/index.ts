import { debounce } from "./debounce";

const btnPrint = document.getElementById("btnPrint");

const click = () => {
  console.log(`click!`);
};

btnPrint?.addEventListener("click", debounce(click, 500));
