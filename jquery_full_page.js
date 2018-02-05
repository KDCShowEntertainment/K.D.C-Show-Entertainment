// universal application when it comes to choosing images and colors
    //capabilities: outer body resizing
    //            : script awareness of position css attribute limiting its ablilty to change itself
    //            :keyframnes embedding


    
    //planned work : main object background fades out into white, later this can be turned into an option
    //             : main object moving to cover visible page
    

    
    //far in the future: inner object resizing
    //                 : main object resizing
    //                  : svg plugin embed
    //                  :query for everything in the full page

    // properties
    //  svg_path, path to the svg image of final result when transforming from image to color, needed for extension to work
    //  image_total_time time it takes for base image to change default is 4s
    //  image_repeats: how many times image change repeats by default it is ne


var call = 0;
var call_amounts = [];







    jQuery.fn.extend({
        full_page:function(michael){
            // this function is a special animation, where it spreads the object to the width of the page and by default makes all the child elements disappear, follow instructions or are edited in their display or content

            // embed keyframes css
{
        var images = []
        images.push($(this).css("background-image").split("(")[1].split(")")[0])
        var final_color = ["white"]
        $("head").append("<style></style>")
        images.forEach(function(image,index){
            
        $("style").append("@-webkit-keyframes mymove { from { background-image:url("+ images[index] +");} to {background-color:" + final_color[index]+ ";}}@keyframes mymove {from { background-image:url(" + images[index] + ");}to {background-color:" + final_color[index]+ ";}}")
        })
}
            ////////////////////////////////////////////////////////////////////
            // needed for full page animation
            // images is an array, which will later hold info about the selectors children
            // final color final desired color in animation
            ////////////////////////////////////////////////////////////////////
            
            
            
            
            //init settings
{
            var full_page_flag = false;
            if($(this).css("position") != "absolute"){
                full_page_flag = true;

            }
            
            if(michael.svg_path === undefined){
                console.error("need an svg of the final transition for it to work")
                return
                
            }
            
            if(michael.image_total_time === undefined){
                michael.image_total_time = "4s"
            }
            
            if(michael.image_repeats === undefined){
                michael.image_repeats = "1"
            }

            
            
}
            //////////////////////////////////////////////////////////////
            // if the selction position is not absolute, we're going to change it to absolute
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
                
                

            
                $(this).animate({
                    "height":$("body").css("height"),
                    "width":$("body").css("width"),
                    "top":"0%",
                    "left":"0%"
                    

                },2000)
                
                
                
                $(this).css({
                    
                    "background-image":"url(" + michael.svg_path + ")",
                    "background-size":"cover",
                    "-webkit-animation": "mymove " +  michael.image_total_time +  " " + michael.image_repeats,
                    "animation": "mymove " +  michael.image_total_time +  " " + michael.image_repeats,
                    
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
    


