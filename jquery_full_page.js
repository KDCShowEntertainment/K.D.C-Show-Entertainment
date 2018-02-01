// in this version we have a reliance of outside css to enable the image fading or changing animation, we need an svg of the animation end and we need to make keyframes, so internailize in the newer volumes
    //capabilities: outer body resizing
    //            : script awareness of position css attribute limiting its ablilty to change itself


    
    //planned work : main object background fades out into white, later this can be turned into an option
    //             : main object moving to cover visible page
    

    
    //far in the future: inner object resizing
    //                 : main object resizing


var call = 0;
var call_amounts = [];
    jQuery.fn.extend({
        full_page:function(michael){
            // this function is a special animation, where it spreads the object to the width of the page and by default makes all the child elements disappear, follow instructions or are edited in their display or content

            //init settings
{
            var full_page_flag = false;
            if($(this).css("position") != "absolute"){
                full_page_flag = true;

            }
}
            //////////////////////////////////////////////////////////////
            // if the selction position is static, we're going to change it to relative
            //////////////////////////////////////////////////////////////



            //setting up event function
{
            var full_page_selector = $($(this).selector);
            full_page_selector.click(function (){
                if(full_page_flag == true){
                    
                    $(this).css({
                        "position":"absolute",
                        "left":$(this).offset().left
                    });
                }
                
                
                // $(this).css({
                //     "top":"0%"
                // })
            
                $(this).animate({
                    "height":$("body").css("height"),
                    "width":$("body").css("width"),
                    "top":"0%",
                    "left":"0%"
                    
                    // "background-image":"linear-gradient(-135deg,#1400c8,#b900b4,#f50000)"
                    // "background-size": $("body").css("width").toString(),
                    // "background-size":"cover"
                   
                },2000)
                
                // .removeClass("story_holder_1").addClass("story_holder_1_change");
                
                $(this).css({
                    
                    // "transition": "background 5s linear",
                    //  "-webkit-transition": "background 0.5s linear",
                    "background-size":"cover",
                    // "-webkit-animation": "mymove 2s 1",
                    "animation": "mymove 4s 1",
                    
                    },$(this).css({
                        "background-color":"white"
                    }))
                
                // inner pictures (will setup control for this later)
    {
                
                var full_page_items = $.map($(full_page_selector.selector + " * "), function(value, index) {
                    // if($(value)["0"].tagName == "IMG"){
                    //     $(value).animate({
                    //         "height":$("body").css("height"),
                    //         "width":$("body").css("width"),
                    //         "top":"0%",
                    //         "left":"0%"
                    //     },2000)
                    // }
                    if( $(value).css("background-image") !== "none") {
                    console.log($(full_page_selector).css("background-image"))
                    // $(full_page_selector).animate({
                    //     // "background-size": $("body").css("height").toString() + " " + $("body").css("width").toString()
                    // });
                    
                    it_was_parent = true;
                    }
                    
                    if(index == 0){
                        return [$(full_page_selector),$(value)]
                    }
                    return $(value);
                });
                
                console.log(full_page_items)
                
    }
                //////////////////////////////////////////////////////////////
                // trying to see if the item in question has an image that needs to be faded out
                //////////////////////////////////////////////////////////////
                
            })
            full_page_selector.trigger("click");
}
            //////////////////////////////////////////////////////////////
            // var full_page_selector contains the string use to select what this is referring to
            //////////////////////////////////////////////////////////////
        }
        
        
    });
    


