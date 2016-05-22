$(document).ready(function() {

  // MODALS
  // Informações do item
  $('.table tbody tr').on('click', function() {
    var itemId = $(this).attr('data-item-id');
    console.log('Item selecionado:', itemId);
  });

  // Editar item
  $('.item-edit').on('click', function() {
    var itemId = $(this)
      .closets('tr')
      .attr('data-item-id');
    console.log('Item selecionado:', itemId);
  });

  // Remover item
  $('.item-delete').on('click', function() {
    var itemId = $(this)
      .closets('tr')
      .attr('data-item-id');
    var itemDescricao = $(this)
      .closest('tr')
      .find('.item-descricao')
      .text();

    $('#modal-item-delete').modal();
    $('#modal-item-delete .item-descricao').text(itemDescricao);
    $('#modal-item-delete').on('shown.bs.modal', function() {
      $('#modal-item-delete .delete-link')
        .attr('href', '/item/delete/' + itemId)
        .focus();
      console.log('/item/delete/${itemId}');
    });
  });

});
