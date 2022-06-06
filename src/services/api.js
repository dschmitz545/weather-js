const KEY = '88f5ccf26f8c4523aac33833220406';
// const dotenv = require('dotenv').config();

const fetchData = async (cidade) => {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${cidade}&days=1&aqi=no&alerts=no`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();
  return data;
};

export default fetchData;
