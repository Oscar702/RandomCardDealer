/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];

  function randomSuits() {
    return suits[Math.floor(Math.random() * suits.length)];
  }
  function randomNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }
  var design = randomSuits();

  if (design == "&hearts;" || design == "&diams;") {
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
    document.querySelector(".number").style.color = "red";
  }

  document.querySelector(".top-suit").innerHTML = design;
  document.querySelector(".bottom-suit").innerHTML = design;
  document.querySelector(".number").innerHTML = randomNumbers();
};
