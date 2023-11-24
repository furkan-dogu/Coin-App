export const showData = (coin) => {
  const ulCoins = document.querySelector(".coins");
  const { name, symbol, price, iconUrl, change, rank } = coin;

  const coinElem = document.createElement("li");

  coinElem.className = "coin";

  coinElem.innerHTML = `
        <div class="remove-icon">
            <i class="fas fa-window-close"></i>
        </div>
        <h2 class="coin-name">
            <span>${name}</span>
            <sup>${symbol}</sup>
        </h2>
        <div class="coin-temp">$${Number(price).toFixed(4)}</div>
        <figure>
            <img src="${iconUrl}" />
            <figcaption style='color:${change < 0 ? "red" : "green"}'>
                <i class="fa-solid fa-chart-line"></i>
                <span>${change || 0}%</span>
            </figcaption>
            <div>RANK:${rank}</div>
        </figure>
        
    `;
  ulCoins.append(coinElem);

  coinElem.querySelector(".remove-icon").addEventListener("click", () => {
    coinElem.remove();
  });
};
