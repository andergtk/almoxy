$(document).ready(function() {

  $( '.table tbody tr' ).on( 'click', function() {
    alert( $( this ).attr('data-item-id') );
  });

});
