function calculateMinCost() {
  const inputEl = document.getElementById("rope-lengths");
  const resultEl = document.getElementById("result");

  const raw = inputEl.value.trim();
  if (!raw) {
    resultEl.textContent = 0;
    return;
  }

  let arr = raw
    .split(",")
    .map((item) => Number(item.trim()))
    .filter((num) => !Number.isNaN(num));

  if (arr.length <= 1) {
    resultEl.textContent = 0;
    return;
  }

  let totalCost = 0;

  while (arr.length > 1) {
    arr.sort((a, b) => a - b);
    const first = arr.shift();
    const second = arr.shift();
    const cost = first + second;
    totalCost += cost;
    arr.push(cost);
  }

  resultEl.textContent = totalCost;
}