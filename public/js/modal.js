/**
 * Item delete
 */
$('.item-delete').on('click', function(e) {
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
