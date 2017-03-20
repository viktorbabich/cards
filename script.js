var container = document.getElementById('container');
var button = document.getElementById('addButton');

var storageList = localStorage.getItem('list');

function User(data) {
	if (!data) { data = {}}
	var self = this;
	this.name = data.name || 'Имя не задано';
	this.id = data.id ? data.id : Date.now();
}

var app = {
	list: [],
	addUser: function(data) {
		var div, user, template;

		user = new User(data);
		app.list.push(user);
		
		template = [
			'<div class="item__inner">',
				'<div class="item__name">' + user.name + '</div>',
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
	}
}

button.addEventListener('click', app.addUser);

if(storageList && storageList.length > 0) {
	var list = JSON.parse(storageList);

	list.forEach(function(n, k) {

		console.log(n)

		app.addUser(n)
	})
}	