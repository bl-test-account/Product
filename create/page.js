$(function() {
  BL.scanProduct(function(data){
    if(data.name.length > 0){
      $('#name > strong').text(data.name);
      $('#image').attr('src', data.image);
      $('#price').text('$' + data.price);
      $('#buy').text('View at walmart.com');
      $('#buy').attr('href', data.url);
    }
    else{
      $('#name > strong').text("Product not found at walmart.com");
    }
  })
})