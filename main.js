import "./scss/style.scss";
import { apiRequest } from "./src/apiRequest";
import setMessage from "./src/setMessage";

const form = document.querySelector(".container header form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getCoinData();
  e.target.reset();
});

const getCoinData = () => {
  const input = document.querySelector("header form input").value;

  if (!input.trim()) {
    setMessage("Input can not be blank");
  } else {
    apiRequest(input);
  }
};
