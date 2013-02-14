Number.prototype.toMoney = function(decimals, decimal_sep, thousands_sep) { 
  var n = this,
  c = isNaN(decimals) ? 2 : Math.abs(decimals), //if decimal is zero we must take it, it means user does not want to show any decimal
  d = decimal_sep || '.', //if no decimal separator is passed we use the dot as default decimal separator (we MUST use a decimal separator) 
  t = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep, //if you don't want to use a thousands separator you can pass empty string as thousands_sep value
  sign = (n < 0) ? '-' : '',
  i = parseInt(n = Math.abs(n).toFixed(c)) + '', 
  j = ((j = i.length) > 3) ? j % 3 : 0; 
  return sign + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : ''); 
}

$(function() {
  var data = JSON.parse(BL.getContentForPreview().content[0].data);
  
  $('.image').attr('src', data.product.images[0].link);
  $('.title').text(data.product.title);
  $('.price').text('$' + data.product.inventories[0].price.toMoney());
  $('.description').text(data.product.description);
  $('.promo').text(data.promo)
  BL.previewReady(); // this is what tells the preview page to display this component - must be called
})