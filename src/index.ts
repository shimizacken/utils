import { debounce } from "./debounce";
import { server } from "./server";

const inpSearch = document.getElementById("inpSearch");
const spnSearch = document.getElementById("spnSearch");

const search = (e: Event) => {
  const { value } = <HTMLInputElement>e.target;

  if (spnSearch) {
    server.searchServer(value).then((result) => {
      spnSearch.innerText = result;
    });
  }

  return value;
};

inpSearch?.addEventListener("input", debounce(search, 300, true));
