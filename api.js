//

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json()) // returns a promise that resolves with the result of parsing the response body as JSON
  .then((data) =>
    console.log(
      data
        .filter((cont) => cont.continents.includes("Europe"))
        .map((ans) => ans.name.common)
    )
  );

// population grater than 1000000 and sort that country name

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) =>
    console.log(
      data
        .filter((pop) => pop.population > 10000000)
        .toSorted((a, b) => b.population - a.population)
        .map((ans) => `${ans.name.common} ${ans.population}`)
    )
  );

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) =>
    console.log(
      data
        .filter((pop) => pop.population > 10000000)
        .toSorted((a, b) => b.population - a.population)
        .map((ans, ind) => `${++ind}. ${ans.name.common} - ${ans.population}`)
        .join("\n")
    )
  );
// top 10 populated countries

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) =>
    console.log(
      data
        .filter((pop) => pop.population > 10000000)
        .toSorted((a, b) => b.population - a.population)
        .slice(0, 10)
        .map((ans, ind) => `${++ind} ${ans.name.common}-${ans.population}`)
        .join("\n")
    )
  );
