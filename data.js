async function getFullCountryList() {
  const url =
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region"; // fields for home page
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const json = await response.json();
    console.log(json);

    json.forEach((e) => {
      const newCountry = document.createElement("li");
      newCountry.classList.add("country-entry");
      newCountry.innerHTML = `<img class="country-flag" src="${e.flags.png}" alt="${e.flags.alt}" />
        <div class="country-desc">
          <h2>${e.name.common}</h2>
          <ul class="country-stats">
            <li>
              <strong>Population:</strong>
              ${e.population}
            </li>
            <li>
              <strong>Region:</strong>
              ${e.region}
            </li>
            <li>
              <strong>Capital:</strong>
              ${e.capital[0]}
            </li>
          </ul>
        </div>`;
      document.getElementById("country-list").appendChild(newCountry);
    });
  } catch (err) {
    console.error(err);
  }
}

getFullCountryList();

//json.name.nativeName[0].official
//json.population
//json.region
//json.subregion
//json.capital[]
//json.tld[]
//json.currencies[0].name --- json.currencies[0].symbol
//json.languages[]
//json.borders[]
