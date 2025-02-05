export default function populateTable(data, place, unit) {
  const table = document.querySelector("#weather-table");
  const tbody = document.querySelector("#weatherTableBody");

  let tempUnit = "°F";
  if (unit === "uk") {
    tempUnit = "°C";
  }

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  data.forEach((entry) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${entry.datetime}</td>
        <td>${entry.conditions}</td>
        <td>${entry.tempmax}${tempUnit}</td>
        <td>${entry.tempmin}${tempUnit}</td>
      `;

    tbody.appendChild(row);
    document.querySelector("#place").textContent = place;
    table.classList.remove("hidden");
  });
}
