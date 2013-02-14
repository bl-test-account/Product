$(function() {
  BL.scanProduct(function(data){
    $('#name > strong').text(data.name);
    $('#image').attr('src', data.image);
    $('#price').text('$' + data.price);
    $('#buy').text('View at walmart.com');
    $('#buy').attr('href', data.url);
  })
})