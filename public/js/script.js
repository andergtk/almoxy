$(document).ready(function() {

  /**
   * Modals
   */

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
      .closest('tr')
        .attr('data-item-id');
    var itemDescricao = $(this)
      .closest('tr')
      .find('.item-descricao')
        .text();

    $('#modal-item-delete .item-descricao').text('"' + itemDescricao + '"');
    $('#modal-item-delete').modal()
      .on('shown.bs.modal', function() {
        $(this).find('input[name="id"]').attr('value', itemId);
        $(this).find('.delete-link').focus();
      });
  });

});
