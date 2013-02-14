var clearData = function() {
  $('.image').addClass('invisible');
  $('.title').text('');
  $('.price').text('');
  $('.description').text('');
  $('.message').text('');
}

var scanned = function(data) {
    if(data.found){
      $('.image').removeClass('invisible');
      $('.image').attr('src', data.item.product.images[0].link);
      $('.title').text(data.item.product.title);
      $('.price').text('$' + data.item.product.inventories[0].price);
      $('.description').text(data.item.product.description);
      $('.message').text('');
      $('#submit').removeClass('disabled-button');
    }
    else{
      $('.message').text('Product not found');
    }
}

$(function() {
  BL.scanProduct(function(data){
    scanned(data);
  })
  
  $('#rescan').click(function(){
    $('#submit').addClass('disabled-button');
    clearData();
    BL.scanProduct(function(data){
      scanned(data);
    })
  });
})