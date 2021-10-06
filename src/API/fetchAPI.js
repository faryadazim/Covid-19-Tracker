// const url = "https://disease.sh/v3/covid-19/countries"
export async function fetchAPI() {
  const response = await fetch(`https://disease.sh/v3/covid-19/countries`);
  const json = await response.json();
  return json;
}
