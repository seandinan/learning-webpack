require('./css/index.scss');

import 'babel-polyfill';
const entry = require('./js/index');

const input = document.getElementById('itemInput');
input.addEventListener('keyup', function(event){
	if (event.keyCode === 13){
		entry.addEntry(event.target.value);
		event.target.value = '';
	}
})