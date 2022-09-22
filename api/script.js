const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9771f2397fmshe299e12b6593bc5p16319bjsn6d841a0bae6c',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};



	async function fillTable(url ,options ,table) {
		const tableHead = table.querySelector('thead');
		const tableBody = table.querySelector('tbody');
		const response = await fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options);
		const data = await response.json();
	
		tableHead.innerHTML = "<tr></tr>";
		tableBody.innerHTML = "";
	
	
		for (const headerText in data.countries_stat[0]) {
				const HeaderElement =  document.createElement("th");
				HeaderElement.textContent = headerText;
				tableHead.querySelector('tr').appendChild(HeaderElement);
			}
	
	
		for (let i = 0; i < data.countries_stat.length; i++) {
			const obj = Object.values(data.countries_stat[i]);
			const rowElement = document.createElement("tr");
			for (const cellText of obj) {
				const cellElement = document.createElement("td");
				cellElement.textContent = cellText;
				rowElement.appendChild(cellElement);
			}
			tableBody.appendChild(rowElement);
		}	

}


fillTable('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options, document.querySelector('table'));

	