$(function() {
  BL.scanProduct(function(data){
    if(data.found){
      $('.image').attr('src', data.item.product.images[0].link);
      $('.title').text(data.item.product.title);
      $('.price').text('$' + data.item.product.inventories[0].price);
      $('.description').text(data.item.product.description);
    }
    else{
      $('#name > strong').text("Product not found at walmart.com");
    }
  })
})