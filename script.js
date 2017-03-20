var container = document.getElementById('container');
var button = document.getElementById('addButton');

var storageList = localStorage.getItem('list');

function User(data) {
	if (!data) { data = {}}
	var self = this;
	this.name = data.name || 'Имя не задано';
	this.surname = data.surname || 'Фамилия не задана';
	this.company = data.company || 'Компания не задана';
	this.phone = data.phone;
	this.email = data.email;
	this.id = data.id ? data.id : Date.now();
}

var app = {
	list: [],
	addUser: function(e, data) {
		var div, user, template;
		console.log(data, ' data');
		user = new User(data);
		app.list.push(user);


			
		template = [
			'<div class="item__inner">',
				'<div class="item__name">' + user.name + '</div>',
				'<div class="item__name">' + user.surname + '</div>',
				'<div class="item__name">' + user.company + '</div>',
				'<div class="item__name">' + user.phone + '</div>',
				'<div class="item__name">' + user.email + '</div>',
			'</div>'
		].join("");


		div = document.createElement('div');
		div.className = 'item';
		div.setAttribute('data-id', user.id);
		div.innerHTML = template;
		container.appendChild(div);
													},
	removeUser: function(id) {

	},
	getList: function() {
		return app.list
	},
	getItemById: function() {
		// 
	},
	sortByName: function() {
		// 
	},
	saveList: function() {
		localStorage.setItem('list', JSON.stringify(app.list))
	},
	removeList: function() {
		localStorage.removeItem('list')
	},
	createUserView: function(data) {

	},
	checkRequired: function() {
		// qsa
	},
	getFormData: function() {
		var items = document.querySelectorAll('#cardForm input'); //создается массив items со всеми инпутами
		console.log(items, 'kdlsfjd');//вывел сюда весь массив app.getFormData()
		var result = {};
		items.forEach(function(item) { //для каждого элемента в массиве items

				var attr = item.getAttribute('name'); 
				if(attr) { //у которого есть атрибут 
					result[attr] = item.value; //берем значение этого элемента инпут
				}

		});
		console.log(result);
		app.addUser(null, result);
	}
}

button.addEventListener('click', app.getFormData);







// if(storageList && storageList.length > 0) {
// 	var list = JSON.parse(storageList);

// 	list.forEach(function(n, k) {

// 		console.log(n)

// 		app.addUser(null, n)
// 	})
// }	
