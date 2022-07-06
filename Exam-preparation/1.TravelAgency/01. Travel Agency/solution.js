window.addEventListener('load', solution);

function solution() {
  	let boxName = document.getElementById('fname');
	let boxEmail = document.getElementById('email');
	let boxPhone = document.getElementById('phone');
	let boxAddress = document.getElementById('address');
	let boxPost = document.getElementById('code');

	let btnSubmit = document.getElementById('submitBTN');
	btnSubmit.addEventListener('click', onSubmit);

	let preview = document.getElementById('infoPreview');
	let btnEdit = document.getElementById('editBTN');
	btnEdit.addEventListener('click', onEdit);
	let btnContinue = document.getElementById('continueBTN');
	btnContinue.addEventListener('click', onContinue);

	function onSubmit(e) {
		e.preventDefault();
		let name = boxName.value;
		let email = boxEmail.value;
		if(name !== '' && email !== '') {
			let phone = boxPhone.value;
			let address = boxAddress.value;
			let post = boxPost.value;

			preview.innerHTML = 
				`<li>Full Name: ${name}</li>
                <li>Email: ${email}</li>
                <li>Phone Number: ${phone}</li>
                <li>Address: ${address}</li>
                <li>Postal Code: ${post}</li>`;
			
			btnEdit.disabled = false;
			btnContinue.disabled = false;
			btnSubmit.disabled = true;

			boxName.value = '';
			boxEmail.value = '';
			boxPhone.value = '';
			boxAddress.value = '';
			boxPost.value = '';
		}
	}

	function onEdit(e) {
		e.preventDefault();
		let name = preview.getElementsByTagName('li')[0].textContent.split('Full Name: ')[1];
		let email = preview.getElementsByTagName('li')[1].textContent.split('Email: ')[1];
		let phone = preview.getElementsByTagName('li')[2].textContent.split('Phone Number: ')[1];
		let address = preview.getElementsByTagName('li')[3].textContent.split('Address: ')[1];
		let post = preview.getElementsByTagName('li')[4].textContent.split('Postal Code: ')[1];

		boxName.value = name;
		boxEmail.value = email;
		boxPhone.value = phone;
		boxAddress.value = address;
		boxPost.value = post;

		preview.innerHTML = '';
		btnEdit.disabled = true;
		btnContinue.disabled = true;
		btnSubmit.disabled = false;
	}

	let block = document.getElementById('block');
	function onContinue(e) {
		e.preventDefault();
		block.innerHTML = '';
		let h3 = document.createElement('h3');
		h3.textContent = 'Thank you for your reservation!';
		block.appendChild(h3);
	}
}
