/**
 * Ir para a página de informações do item ao clicar na tag <tr>
 */
$('.item-info').on('click', function() {
  document.location = '/item/info/' + $(this).attr('data-item-id');
});

$('.btn-item-type').on('click', function() {
  var type = $(this).find('input[name="type"]').val();
  statusToggle(type);
});

/**
 * Altera as opções do select ao mudar o tipo de item
 */
function statusToggle(type) {
  $('#item-status option').css('display', 'block');

  if ('achados_e_perdidos' === type) {
    $('#item-status option[value^="alx"]').css('display', 'none');
    $('#item-status option[value^="aep"]:first').prop('selected', true);
  } else if ('almoxarifado' === type) {
    $('#item-status option[value^="aep"]').css('display', 'none');
    $('#item-status option[value^="alx"]:first').prop('selected', true);
  }
}

// Chama a função ao carregar a página
$(statusToggle('almoxarifado'));
