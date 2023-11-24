import setMessage from "./setMessage";
import { showData } from "./showData";

export const apiRequest = async (input) => {
  const url = `https://api.coinranking.com/v2/coins?search=${input}`;

  const options = {
    headers: { "x-access-token": import.meta.env.VITE_API_KEY },
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    if (json.data.coins.length === 0) {
      setMessage("Coin can not be found");
    } else {
      showData(json.data.coins[0]);
    }
  } catch (error) {
    console.log(error);
  }
};
