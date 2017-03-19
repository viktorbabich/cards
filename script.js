var container = document.getElementById('container');
var button = document.getElementById('addButton');
button.onclick = Create; 

function Create() {
	var info 	 = document.getElementById('info');
	var name     = document.getElementById('name');
	var surname  = document.getElementById('surname');
	var company  = document.getElementById('company');
	this.name 	 = name.value;
	this.surname = surname.value;
	this.company = company.value;
	if 
	(name.value == false || surname.value == false || company.value == false ) {
		info.innerHTML = "Недостаточно данных";
		info.style.background = 'red';
	} else {
		var card = document.createElement('div');
		card.className = "card";
		var cardInner  = document.createElement('div');
		card.innerHTML = 
		"<p class='card__inner'> Имя: " + [this.name] + "</p>" + 
		"<p class='card__inner'> Фамилия: " + [this.surname] + "</p>" + 
		"<p class='card__inner'> Компания: " + [this.company] + "</p>";
				var buttonDelete = document.createElement('button');
				buttonDelete.className = "buttonDelete"; 
				card.appendChild(buttonDelete); 
		container.appendChild(card);
			buttonDelete.onclick = function () {
				this.parentNode.parentNode.removeChild(this.parentNode);
			}
		name.value = '';
		surname.value = '';
		company.value = '';
		info.innerHTML = "Карточка создана";
		info.style.background = 'green';
	}
}






function appear() {
	var card = document.createElement('div');
	card.className = "test";
	card.innerHTML = 'wow';
		// var button = document.createElement('button');
		// button.className = "button1"
		// button.innerHTML = 'Удалить запись';	 
		// div.appendChild(button); 
	container.appendChild(div);

	// button.onclick = function () {
	// 	this.parentNode.parentNode.removeChild(this.parentNode);
	// }
}



// var user = new Card("name","Бабич", "jetStyle");
// console.log(user.name);

// var user1 = new Card("Елена","Мильчакова", "MTS");
// console.log(user.name);
// console.log(user1.surname);
