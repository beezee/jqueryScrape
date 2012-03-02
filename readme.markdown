See http://brianzeligson.com/jqueryScrape for example

simplest usage as follows:

		jQuery('document').ready(function($) {
                
			$.jqueryScrape.setProxyUrl('http://website.com/full/path/to/jquery.scrape.proxy.php');
                        
			$('body').bind('buzzfeed', function(e, response) {
				var buzzfeed = $.jqueryScrape.span2img(response);
				$('body').append(buzzfeed);
			    });
			    
			$.jqueryScrape.getResult('http://www.buzzfeed.com', 'buzzfeed');
		});
                
The proxy will replace all img tags as spantags to prevent them from downloading on initial request. Use $.jqueryScrape.span2img to return
a jQuery accessible object with all img tags intact. Additional options are available for the method (for sites using relative urls, storing src in
alternative attributes, filtering which images are converted back, etc) and the options and advanced use are available in the plugin source, as well
as the example site above.