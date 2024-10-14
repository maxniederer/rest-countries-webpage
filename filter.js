const select = document.getElementById("region-select");
let currFilter = select.value;

let allCountries = document.getElementsByClassName("country-entry");

let regionArray = [
  document.getElementsByClassName("africa"),
  document.getElementsByClassName("americas"),
  document.getElementsByClassName("antarctic"),
  document.getElementsByClassName("asia"),
  document.getElementsByClassName("europe"),
  document.getElementsByClassName("oceania"),
];

function updateFilter() {
  currFilter = select.value;

  Array.from(allCountries).forEach((element) => {
    element.classList.add("hidden");
  });

  Array.from(regionArray[select.selectedIndex - 1]).forEach((element) => {
    element.classList.remove("hidden");
  });
}
