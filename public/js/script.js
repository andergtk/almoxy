/**
 * Ir para a página de informações do item ao clicar na tag <tr>
 */
$('.item-info').on('click', function() {
  document.location = '/item/info/' + $(this).attr('data-item-id');
});
