const tableData = [
  ["A1", 41], ["A2", 18], ["A3", 21], ["A4", 63], ["A5", 2], ["A6", 53],
  ["A7", 5], ["A8", 57], ["A9", 60], ["A10", 93], ["A11", 28], ["A12", 3],
  ["A13", 90], ["A14", 39], ["A15", 80], ["A16", 88], ["A17", 49],
  ["A18", 60], ["A19", 26], ["A20", 28]
];

const tbody1 = document.querySelector("#table1 tbody");

tableData.forEach(([label, value]) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${label}</td><td>${value}</td>`;
  tbody1.appendChild(row);
});

// Extract required values for Table 2
const valueMap = Object.fromEntries(tableData);

document.getElementById("alpha").innerText = valueMap["A5"] + valueMap["A20"];
document.getElementById("beta").innerText = valueMap["A15"] / valueMap["A7"];
document.getElementById("charlie").innerText = valueMap["A13"] * valueMap["A12"];
