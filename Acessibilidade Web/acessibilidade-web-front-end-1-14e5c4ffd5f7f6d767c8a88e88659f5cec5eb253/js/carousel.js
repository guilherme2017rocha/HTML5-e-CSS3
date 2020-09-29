// Variáveis
var new0 = document.querySelector('#new0');
var new1 = document.querySelector('#new1');
var new2 = document.querySelector('#new2');
var btns = document.querySelectorAll('.listaDeArtigos-slider-item');

//Cria span de slide atual
var spanSlideAtual = document.createElement('span');
spanSlideAtual.classList.add('escondeVisualmente');
spanSlideAtual.id = 'slideAtual';
spanSlideAtual.textContent = ' (Slide Atual)';

//Mostrar notícia se tiver js ativo no navegador
new0.style.display = 'block';

// Percorre todos os botoes controladores
btns.forEach(function(btn) {

  btn.addEventListener('click', function() {
    
    atualizarArtigo(this);

    //this.appendChild(spanSlideAtual);

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo');
    })

    this.classList.add('listaDeArtigos-slider-item--ativo');
    
    appendSpanChild();
  })
})

function atualizarArtigo(btn) {

	let newX = btn.getAttribute('data-sliderItem');
	let artigos = document.querySelectorAll('.listaDeArtigos-item');

	artigos.forEach( function(artigo) {
		artigo.style.display = 'none';

		if(artigo.id === 'new'+newX) { artigo.style.display = 'block'; }

	});	
}

function appendSpanChild() {
	document.querySelector('.listaDeArtigos-slider-item--ativo').appendChild(spanSlideAtual);
}
appendSpanChild();