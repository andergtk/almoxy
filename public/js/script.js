$(document).ready(function() {

  /**
   * Modals
   */

  // Informações do item
  $('.table tbody tr').on('click', function() {
    var itemId = $(this).attr('data-item-id');

    $('#modal-item-info').modal()
      .on('shown.bs.modal', function() {
        $(this)
          .find('.btn-fechar')
            .focus();
      });
  });

  // Editar item
  $('.item-editar').on('click', function(e) {
    var itemId = $(this)
      .closest('tr')
        .attr('data-item-id');

    e.stopPropagation();

    $('#modal-item-editar').modal()
      .on('shown.bs.modal', function() {
        $(this)
          .find('.btn-salvar')
            .focus();
      });
  });

  // Excluir item
  $('.item-excluir').on('click', function(e) {
    var itemId = $(this)
      .closest('tr')
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

});
