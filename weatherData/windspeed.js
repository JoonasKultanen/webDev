
const populateTable = (data) => {
    const table = document.getElementById("datawind");

    data.map(item => {
        const row = document.createElement("tr");

        const time = new Date(item.date_time);

        const newTime = time.toLocaleString('fi-Fi');
        time.toLocaleString('fi-Fi');

        const datePart = document.createElement ("td");
        datePart.className = "date-part";
        datePart.innerHTML = newTime;
        row.appendChild(datePart);

        const valuePart = document.createElement ("td");
        valuePart.className = "value-part";
        valuePart.innerHTML = item.wind_speed;
        row.appendChild(valuePart);

        table.appendChild(row);

    })
}


const fetchDataWind = async () => {
    try{
        const response = await fetch('https://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed');
        const jsonData = await response.json();
        populateTable(jsonData)
    }   catch (error) {
        console.error(error);
    }
}

fetchDataWind();