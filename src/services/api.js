const KEY = process.env.REACT_APP_API_KEY;

const fetchData = async (cidade) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${cidade}&days=1&aqi=no&alerts=no`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();
  return data;
};

export default fetchData;
