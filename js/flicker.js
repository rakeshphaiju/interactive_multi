function make_search() {
      var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
      var tag = document.getElementById('search').value;
      $.getJSON( flickerAPI, {
       tags: tag,
       tagmode: "any",
       format: "json"
     })
       .done(function( data ) {
         $.each( data.items, function( i, item ) {
           $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
           if ( i === 25 ) {
             return false;
           }
         });
       });
       $("#images").empty();
   };