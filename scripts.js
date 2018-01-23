(function($){
    
    $(function(){
        
        $(".aparat-video-frame")
            .each(function(){
                
                var $this = $( this );
                var $iFrame = $("<iframe>", {
                    allowFullScreen: "true",
                    webkitallowfullscreen: "true",
                    mozallowfullscreen: "true",
                    src: $this.data("src")
                })
                    .css({ border: "none" });
                var $span = $("<span>")
                    .css({
                        display: "block",
                        paddingTop: "57%"
                    });
                
                $this
                    .html("")
                    .append($span)
                    .append($iFrame)
                    .addClass("h_iframe-aparat_embed_frame");
                
            });
        
    });
    
}(jQuery));
