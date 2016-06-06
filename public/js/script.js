// Inicializa o DataTables
$('#table-almoxarifado').DataTable({
  language: {
    url: "/js/dataTables.pt-br.lang.json"
  },
  columns: [
    null,
    { width: "50" },
    { width: "76px" },
    { width: "76px" }
  ]
});

$('#table-achados-e-perdidos').DataTable({
  language: {
    url: "/js/dataTables.pt-br.lang.json"
  },
  columns: [
    null,
    { width: "220px" },
    { width: "76px" },
    { width: "76px" },
    { width: "76px" }
  ]
});

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

// Chama a função ao carregar a página
$(statusToggle('almoxarifado'));

/**
 * Altera as opções do select ao mudar o tipo de item
 */
function statusToggle(type) {
  if (! type)
    type = 'almoxarifado';

  console.log('Função chamada\n' + type);
  $('#item-status option').css('display', 'block');

  if ('achados_e_perdidos' === type) {
    $('#item-status option[value^="alx"]').css('display', 'none');
    $('#item-status option[value^="aep"]:first').prop('selected', true);
  } else if ('almoxarifado' === type) {
    $('#item-status option[value^="aep"]').css('display', 'none');
    $('#item-status option[value^="alx"]:first').prop('selected', true);
  }
}
