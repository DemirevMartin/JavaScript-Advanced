window.addEventListener("load", solve);

function solve() {
	// 1.	Getting the information from the form
	let boxMake = document.getElementById('make');
	let boxModel = document.getElementById('model');
	let boxYear = document.getElementById('year');
	let boxFuel = document.getElementById('fuel');

	let boxOriginal = document.getElementById('original-cost');
	let boxSelling = document.getElementById('selling-price');

	let btnPublish = document.getElementById('publish');
	btnPublish.addEventListener('click', onPublish);

	let posts = document.getElementById('table-body');

	function onPublish(e) {
		e.preventDefault();
		let make = boxMake.value;
		let model = boxModel.value;
		let year = boxYear.value;
		let fuel = boxFuel.value;

		let original = Number(boxOriginal.value);
		let selling = Number(boxSelling.value);

		if(make !== '' && model !== '' && year !== '' && fuel !== '' && !isNaN(original) && !isNaN(selling) && selling > original) {
			let tr = document.createElement('tr');
			tr.classList.add('row');
			tr.innerHTML = 
				`<td>${make}</td>
				<td>${model}</td>
				<td>${year}</td>
				<td>${fuel}</td>
				<td>${original}</td>
				<td>${selling}</td>
				<td>
					<button class="action-btn edit">Edit</button>
					<button class="action-btn sell">Sell</button>
				</td>`;
			posts.appendChild(tr);

			boxMake.value = '';
			boxModel.value = '';
			boxYear.value = '';
			boxFuel.value = '';
			
			boxOriginal.value = '';
			boxSelling.value = '';
				
			let btnEdit = tr.getElementsByTagName('button')[0];
			btnEdit.addEventListener('click', onEdit);
			let btnSell = tr.getElementsByTagName('button')[1];
			btnSell.addEventListener('click', onSell);
		}
	}

	// 2.	Edit information for posts
	function onEdit(e) {
		e.preventDefault();
		let tr = e.target.parentElement.parentElement;
		let make = tr.getElementsByTagName('td')[0].textContent;
		let model = tr.getElementsByTagName('td')[1].textContent;
		let year = tr.getElementsByTagName('td')[2].textContent;
		let fuel = tr.getElementsByTagName('td')[3].textContent;

		let original = Number(tr.getElementsByTagName('td')[4].textContent);
		let selling = Number(tr.getElementsByTagName('td')[5].textContent);

		boxMake.value = make;
		boxModel.value = model;
		boxYear.value = year;
		boxFuel.value = fuel;
		
		boxOriginal.value = original;
		boxSelling.value = selling;

		posts.removeChild(tr);
	}


	// 3.	Sell car
	let sales = document.getElementById('cars-list');
	let profit = document.getElementById('profit');

	function onSell(e) {
		e.preventDefault();
		let tr = e.target.parentElement.parentElement;
		let make = tr.getElementsByTagName('td')[0].textContent;
		let model = tr.getElementsByTagName('td')[1].textContent;
		let year = tr.getElementsByTagName('td')[2].textContent;

		let original = Number(tr.getElementsByTagName('td')[4].textContent);
		let selling = Number(tr.getElementsByTagName('td')[5].textContent);
		let newProfit = selling - original;

		let li = document.createElement('li');
		li.classList.add('each-list');
		li.innerHTML = 
			`<span>${make} ${model}</span>
			 <span>${year}</span>
			 <span>${newProfit}</span>`;
		sales.appendChild(li);

		let currentProfit = Number(profit.textContent);
		profit.textContent = (currentProfit + newProfit).toFixed(2);

		posts.removeChild(tr);
	}
}