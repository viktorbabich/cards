var container = document.getElementById('container');
var button = document.getElementById('addButton');



function User(data) {
	if (!data) { data = {}}
	var self = this;
	this.name = data.name;
	this.id = Date.now();
}

var app = {
	list: [],
	addUser: function(data) {
		var div, user, template;

		user = new User(data)
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
		var list = [];
		localStorage.setItem('list', list)
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