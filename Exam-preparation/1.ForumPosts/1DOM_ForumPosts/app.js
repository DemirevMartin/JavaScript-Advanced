window.addEventListener("load", solve);

function solve() {
	// 1.	Getting the information from the form
	let boxTitle = document.getElementById('post-title');
	let boxCategory = document.getElementById('post-category');
	let boxContent = document.getElementById('post-content');

	let publish = document.getElementById('publish-btn');
	publish.addEventListener('click', onPublish);

	let review = document.getElementById('review-list');
	
	function onPublish(e) {
		e.preventDefault();
		let title = boxTitle.value;
		let category = boxCategory.value;
		let content = boxContent.value;
		if(title !== '' && category !== '' && content !== '') {
			let newLi = document.createElement('li');
			newLi.classList.add('rpost');
			newLi.innerHTML = 
				`<article>
					<h4>${title}</h4>
					<p>Category: ${category}</p>
					<p>Content: ${content}</p>
				</article>
				<button class="action-btn edit">Edit</button>
				<button class="action-btn approve">Approve</button>`;
			review.appendChild(newLi);

			boxTitle.value = '';
			boxCategory.value = '';
			boxContent.value = '';
			let current = review.lastElementChild;
			let edit = current.getElementsByTagName('button')[0];
			edit.addEventListener('click', onEdit);
			let approve = current.getElementsByTagName('button')[1];
			approve.addEventListener('click', onApprove);
		}
	}

	// 2.	Edit information for posts
	
	function onEdit(e) {
		e.preventDefault();
		let li = e.target.parentElement;
		let title = li.getElementsByTagName('h4')[0].textContent;
		let category = li.getElementsByTagName('p')[0].textContent.split('Category: ')[1];
		let content = li.getElementsByTagName('p')[1].textContent.split('Content: ')[1];
		
		boxTitle.value = title;
		boxCategory.value = category;
		boxContent.value = content;
		review.removeChild(li);
	}

	// 3.	Approve posts
	let approved = document.getElementById('published-list');

	function onApprove(e) {
		e.preventDefault();
		let li = e.target.parentElement;
		let title = li.getElementsByTagName('h4')[0].textContent;
		let category = li.getElementsByTagName('p')[0].textContent.split('Category: ')[1];
		let content = li.getElementsByTagName('p')[1].textContent.split('Content: ')[1];
		
		
		let newLi = document.createElement('li');
		newLi.classList.add('rpost');
		newLi.innerHTML = 
			`<article>
					<h4>${title}</h4>
					<p>Category: ${category}</p>
					<p>Content: ${content}</p>
			</article>`;
		approved.appendChild(newLi);
		review.removeChild(li);
	}

	// 4.	Clear posts
	let btnClear = document.getElementById('clear-btn');
	btnClear.addEventListener('click', onClear);

	function onClear() {
		Array.from(approved.children).forEach(
			x => approved.removeChild(x)
		);
	}
}