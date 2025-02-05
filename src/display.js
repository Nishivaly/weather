export default function populateTable(data, place) {
  const table = document.querySelector("#weather-table");

  const tbody = document.querySelector("#weatherTableBody");
  tbody.innerHTML = "";

  data.forEach((entry) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${entry.datetime}</td>
        <td>${entry.conditions}</td>
        <td>${entry.tempmax}°C</td>
        <td>${entry.tempmin}°C</td>
      `;

    tbody.appendChild(row);
    document.querySelector("#place").textContent = place;
    table.classList.remove("hidden");
  });
}
