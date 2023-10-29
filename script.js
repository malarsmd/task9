<!DOCTYPE html>
<html>
<head>
    <style>
        table {
            border-collapse: collapse;
        }

        th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div id="calendar"></div>

    <script>
        // Function to create a calendar
        function createCalendar(year, month) {
            const daysInMonth = new Date(year, month, 0).getDate();
            const calendarDiv = document.getElementById("calendar");

            // Create the table
            const table = document.createElement("table");
            calendarDiv.appendChild(table);

            // Create the table header (days of the week)
            const thead = document.createElement("thead");
            table.appendChild(thead);

            const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            for (let i = 0; i < 7; i++) {
                const th = document.createElement("th");
                th.textContent = dayNames[i];
                thead.appendChild(th);
            }

            // Create the table body (calendar days)
            const tbody = document.createElement("tbody");
            table.appendChild(tbody);

            let dayCounter = 1;
            for (let i = 0; i < 6; i++) {
                const row = document.createElement("tr");
                for (let j = 0; j < 7; j++) {
                    const cell = document.createElement("td");
                    if (dayCounter <= daysInMonth) {
                        cell.textContent = dayCounter;
                        dayCounter++;
                    }
                    row.appendChild(cell);
                }
                tbody.appendChild(row);
            }
        }

        // Call the function with a specific year and month
        createCalendar(2023, 10); // Change the year and month as needed
    </script>
</body>
</html>