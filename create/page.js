var clearData = function() {
  $('.image').addClass('invisible');
  $('.title').text('');
  $('.price').text('');
  $('.description').text('');
  $('.message').text('');
}

Number.prototype.toMoney = function(decimals, decimal_sep, thousands_sep)
{ 
  var n = this,
  c = isNaN(decimals) ? 2 : Math.abs(decimals), //if decimal is zero we must take it, it means user does not want to show any decimal
  d = decimal_sep || '.', //if no decimal separator is passed we use the dot as default decimal separator (we MUST use a decimal separator) 
  t = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep, //if you don't want to use a thousands separator you can pass empty string as thousands_sep value
  sign = (n < 0) ? '-' : '',
  i = parseInt(n = Math.abs(n).toFixed(c)) + '', 
  j = ((j = i.length) > 3) ? j % 3 : 0; 
  return sign + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : ''); 
}

var scanned = function(data) {
    if(data.found){
      $('.image').removeClass('invisible');
      $('.image').attr('src', data.item.product.images[0].link);
      $('.title').text(data.item.product.title);
      $('.price').text('$' + data.item.product.inventories[0].price.toMoney());
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
  
  $('#submit').click(function(){
    ;
  });
})