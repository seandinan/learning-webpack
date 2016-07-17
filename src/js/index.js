module.exports.addEntry = function(value){
	const entry = document.createElement('div');
	entry.innerText = value;
	entry.classList.add('entry-block');
	document.body.appendChild(entry);
}