
const populateTable = (data) => {
    const table = document.getElementById("datatemp");

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
        valuePart.innerHTML = item.temperature;
        row.appendChild(valuePart);

        table.appendChild(row);

    })
}


const fetchDataTemp = async () => {
    try{
        const response = await fetch('https://webapi19sa-1.course.tamk.cloud/v1/weather/temperature');
        const jsonData = await response.json();
        populateTable(jsonData)
    }   catch (error) {
        console.error(error);
    }
}

fetchDataTemp();