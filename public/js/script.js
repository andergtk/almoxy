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
    e.stopPropagation();

    var itemId = $(this)
      .closest('tr')
        .attr('data-item-id');

    $('#modal-item-editar').modal()
      .on('shown.bs.modal', function() {
        $(this)
          .find('.btn-salvar')
            .focus();
      });
  });

  // Excluir item
  $('.item-excluir').on('click', function(e) {
    e.stopPropagation();

    var itemId = $(this)
      .closest('tr')
        .attr('data-item-id');
    var itemDescricao = $(this)
      .closest('tr')
      .find('.item-descricao')
        .text();

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
