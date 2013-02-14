$(function() {
  $('p').text('Hello World: this is the preview page that gets used to ' +
              'preview any content added from your plugin to the timeline');
  BL.previewReady(); // this is what tells the preview page to display this component - must be called
})