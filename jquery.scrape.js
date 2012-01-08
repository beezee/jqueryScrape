(function( $ ){
  
  $.jqueryScrape = {
    
    result : '',
    
    proxyUrl : 'jquery.scrape.scraper.php',
   
    getResult : function(url, event) {
       var finishedEvent = (typeof(event) == 'string') ? event : false;
       var self = this;
       if (typeof(url) != 'string') return false;
     
       $.post(this.proxyUrl, {jqueryScrapeUrl : url}, function(response) {
         self.result = $(response);
         if (finishedEvent) $.event.trigger(finishedEvent);
       });
     },
     
     span2img : function(options, callback) {
      
        var settings = $.extend({
          filter : '',
          prepend : '',
          imgClass : ''
        }, options);
        
        var self = this;
        
        if (typeof(callback) != 'undefined') self.result.find(' span[src]').each(callback); else
        self.result.find('span[src]'+settings.filter).each(function() {
          var imgSrc = $(this).attr('src');
          $('<img class="'+settings.imgClass+'" src="'+settings.prepend+imgSrc+'" />').insertAfter($(this));
         })
     },
     
     setProxyUrl : function(url) {
       if (typeof(url) != 'string') return false;      
       this.proxyUrl = url;
     }
  }
     
})( jQuery );