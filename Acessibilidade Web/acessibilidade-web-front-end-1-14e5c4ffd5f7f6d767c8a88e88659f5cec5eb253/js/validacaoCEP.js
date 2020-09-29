
var campoCep = document.querySelector('#cep');

campoCep.addEventListener('invalid', function() {
	this.setCustomValidity('');

	if(!this.validity.valid) {
		this.setCustomValidity('Ops! Algo de errado neste campo!');
		this.parentNode.classList.add('contatoCampo--erro');
		this.classList.add('contatoCampo--validouErro');
	}
});