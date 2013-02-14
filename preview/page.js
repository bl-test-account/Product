
$(function() {  
  for(var i in BL.getContentForPreview().content){
    var data = JSON.parse(BL.getContentForPreview().content[i].data);
    $('#container').append('<div class="deal-container" id="deal' + i + '"><div class="deal">' + data.promo + '</div><div class="title">' + data.product.title + '</div><img class="image" id="im' + i + '" src="' + data.product.images[0].link + '"</img></div>');
    (function(index){
      $('#deal' + index).click(function(){
        BL.showContent(BL.getContentForPreview().content[index].id);
      });
    })(i);
  }
  
  BL.previewReady(); // this is what tells the preview page to display this component - must be called
})