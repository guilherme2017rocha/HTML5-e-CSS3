// Variáveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');
var conteudoForaDialog = document.querySelector('#conteudoForaDialog');
var dialogAberta = false;

btnAbreDialog.style.display = 'block';

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('.dialogNewsletter-campo').focus();
  conteudoForaDialog.inert = true;
  dialogAberta = true;
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');
  conteudoForaDialog.inert = false;   
  btnAbreDialog.focus();
  dialogAberta = false;
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);
document.addEventListener('keyup', function(event) {
	if(event.keyCode == 27 && dialogAberta) { fechandoDialog(); }
});
dialogOverlay.addEventListener('click', fechandoDialog);