const cambiar = () => {
  var body = document.getElementById('body');
  var select = document.getElementById('seleccionarTema');
  var value = select.options[select.selectedIndex].value;
  console.log('Valor selecionado: '+value); 
  body.className = value;
}