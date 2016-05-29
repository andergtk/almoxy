/**
 * Informações do item
 */
$('.table tbody tr').on('click', function() {
  var itemId = $(this).attr('data-item-id');

  $.getJSON('/item/info/' + itemId)
    .fail(function() {
      $('#modal-item-info .modal-body')
        .html('<p>Falha ao buscar informações do item</p>');
    })
    .done(function(item) {
      if (item.erro) {
        $('#modal-item-info .modal-body')
          .html('<p>' + item.erro + '</p>');
        return;
      }

      if ('almoxarifado' === item.tipo) {
        $('#modal-item-info .item-tipo').text('Almoxarifado');
      } else if ('achados-e-perdidos' === item.tipo){
        $('#modal-item-info .item-tipo').text('Achados e perdidos');
      }

      $('#modal-item-info .item-data').text(item.data);
      $('#modal-item-info .item-descricao').text(item.descricao);
      $('#modal-item-info .item-comentario').text(item.comentario);
      $('#modal-item-info .item-quantidade').text(item.quantidade);
    });

  $('#modal-item-info').modal()
    .on('shown.bs.modal', function() {
      $(this)
        .find('.btn-fechar')
          .focus();
    });
});

/**
 * Editar item
 */
$('.item-editar').on('click', function(e) {
  var itemId = $(this)
    .closest('[data-item-id]')
      .attr('data-item-id');

  e.stopPropagation();

  $('#modal-item-editar').modal()
    .on('shown.bs.modal', function() {
      $(this)
        .find('.btn-salvar')
          .focus();
    });
});

/**
 * Excluir item
 */
$('.item-excluir').on('click', function(e) {
  var itemId = $(this)
    .closest('[data-item-id]')
      .attr('data-item-id');
  var itemDescricao = 'Item 007';

  e.stopPropagation();

  $('#modal-item-excluir .item-descricao').text('"' + itemDescricao + '"');
  $('#modal-item-excluir').modal()
    .on('shown.bs.modal', function() {
      $(this)
        .find('input[name="id"]')
          .attr('value', itemId)
        .nextAll('.btn-excluir')
          .focus();
    });
});
