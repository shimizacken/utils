import { debounce } from "./debounce";

const btnPrint = document.getElementById("btnPrint");
const inpSearch = document.getElementById("inpSearch");
const spnSearch = document.getElementById("spnSearch");

const click = () => {
  console.log(`click!`);
};

btnPrint?.addEventListener("click", debounce(click, 500));

const searchServer = (text: string) => {
  return new Promise<string>((resolve) => {
    window.setTimeout(() => {
      resolve(`😁 ${text}`);
    }, 500);
  });
};

const search = (e: Event) => {
  const { value } = <HTMLInputElement>e.target;

  if (spnSearch) {
    searchServer(value).then((result) => {
      spnSearch.innerText = result;
    });
  }

  return value;
};

inpSearch?.addEventListener("input", debounce(search, 300, true));
