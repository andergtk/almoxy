/**
 * Remover item
 */
$('.item-delete').on('click', function(e) {
  e.stopPropagation();
  e.preventDefault();

  var url = $(this).attr('href') || '#';

  $('#modal-item-delete').modal()
    .on('shown.bs.modal', function() {
      $(this)
        .find('.btn-delete')
          .attr('href', url)
          .focus();
    });
});
