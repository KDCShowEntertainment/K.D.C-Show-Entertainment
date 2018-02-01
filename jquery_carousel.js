//remove reliances or other external js libaray or imported them into file
    //capabilities:full carousel functionality
    //            :dual options

    
    //planned work : putting more than one item into carousel
    //             : you must avoid using carousel in any variables, functions, obejcts or arguments as this could ruin the extensions functionalty, especially             using carousel choice as a class in a div, im working on this
    //              :remove all external .js files
    
    // mandatory argument properites
    //  height, height of carousel container
    //  width, width of carousel container

    // optional argument properites
    //  left, the item that controls the left moving functionality,must be a string that jquery can select the element with
    //  right, the item that controls the right moving functionality,must be a string that jquery can select the element with
    //  rate, rate at which the carousel moves
    
    


    

var call = 0;
var call_amounts = [];
var dimension;


    jQuery.fn.extend({
        carousel:function(michael){
            // bootstrap has a carousel function but you need the bootstrap.js file to use it which can cause problems, this takes a selector of supposed associated objects for the carousel  along with left and right event control selectors to have the carousel animation
            
            //argument check and initization
            
    {
        //helper function
        function numberParse(dimension){
            dimension = parseFloat(dimension.split("p")[0])
            return dimension;
        }
        ///////////////////////////////////////////////////////////////////////////////////
        // for returning the number of an dimenision not in number format only px
        ///////////////////////////////////////////////////////////////////////////////////
        
        
        // finds location of important items using this function
        function BrowserCheck()
        {
            var N= navigator.appName, ua= navigator.userAgent, tem;
            var M= ua.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*(\.?\d+(\.\d+)*)/i);
            if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) {M[2]=tem[1];}
            M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
            return M;
        }
        
        var browser = [BrowserCheck()];
        //this will be an array, containing difference among browsers and their versions

        
        var browser_window = window;
        if(browser[0][0] == "Firefox" && parseFloat(browser[0][1]) >= 57 ){
          browser_window = window.top;
        }

        ///////////////////////////////////////////////////////////////////////////////////
        // finding where screen dimensions are
        ///////////////////////////////////////////////////////////////////////////////////
        
        
    }
            if (isNaN(michael.rate)){
                michael.rate = 750;
            }
            if(isNaN(michael.height) || isNaN(michael.width)){
                console.error("need dimension of how large you want you carousel to be add a width and height property with numbers only")
                return;
            }
            var refresh = 1;
            console.log(michael.width,michael.height)
            $(michael.left).addClass("carousel_option")
            $(michael.right).addClass("carousel_option")
            $("body").append("<div class = 'carousel_choice'></div> ");
            

            ///////////////////////////////////////////////////////////////////////////////////
            // making the moving algorithm much simpler and concise
            ///////////////////////////////////////////////////////////////////////////////////
            
            
            
            
            //the posiitioning process
{
            var carousel_item_width;
            var carousel_item_left;
            var carousel_item_height;
            var carousel_item_top;
            var carousel_item_top_position;
            var carousel_spacing;
            var carousel_item_max_left;
            
            
            var carousel_list = $.map($(this), function(value, index) {
                
                carousel_item_width = numberParse($(value).css("width"));
                carousel_item_left = numberParse($(value).css("left"));
                carousel_item_height = numberParse($(value).css("height"));
                carousel_spacing = browser_window.outerWidth - carousel_item_left;
                carousel_item_left_position = $(value).offset().left
                
                
                $(value).css({
                    "left":carousel_spacing * index,
                    "top" : -(carousel_item_height * index),
                    "margin-bottom":0
                    }).addClass("carousel_item").appendTo($("div.carousel_choice"));
                        
                 carousel_item_top = numberParse($(value).css("top"));
                
                return [[$(value),carousel_item_left_position,carousel_item_top]];

            });
            $("div.carousel_choice").css({
                height:michael.height,
                width:michael.width,
                "position":"relative",
                overflow:"hidden"
                
            })
            carousel_item_max_left = numberParse($($(this).selector + ":last").css("left"));
            
            console.log(carousel_list,browser_window.outerWidth,carousel_item_max_left)
}
            ///////////////////////////////////////////////////////////////////////////////////
            // the carousel_item_width might be different make a seperate one for each
            // carousel_spacing takes the width of the item and the page to make sure in the carousel the next item is off of the page
            //use browser_window.outerWidth because body width changes with movement on the page and all that
            // make the margin-bottom equal to zero so carousel looks correct
            // carousel_item_max_left is for repositioning to bring the next to the front when called to the right
            ///////////////////////////////////////////////////////////////////////////////////
            
            //the moving process
{
            var carousel_selected;
            $(".carousel_option").click(function(event){
                $(this).addClass("carousel_choice");
                $(this).hide();
                carousel_selected = $(event.target);
                $(".carousel_choice").trigger("option_click");
                $(this).removeClass("carousel_choice");
                $(this).show(3 *michael.rate );
                
                
                

            })

            
            
            
            var carousel_info;
            
            $(".carousel_choice").on("option_click",function() {
                
    {
        {
            //helper function
            var carousel_operators = {
                '+=': function(a, b) {
                    return a + b;
                },
                '-=': function(a, b) {
                    return a - b;
                }
                
            };

        }
        
        {
        //helper function
        var carousel_repositioner = {
                '-=': function() {
                    
                    return carousel_item_next_position.forEach(function(position,index){
                    if(position < 0 ){
                        carousel_list[index][0].animate({
                            "left":Math.max.apply(null, carousel_item_prev_position)
                            
                        },refresh)
                        
                    }
                })
                },
                '+=': function() {
                    return carousel_item_next_position.forEach(function(position,index){
                    if(position > Math.max.apply(null, carousel_item_prev_position) ){
                        carousel_list[index][0].animate({
                            "left":0
                            
                        },michael.rate)
                        
                    }
                })
                }
                
            };

        }
                //finding out who got clicked
                if(carousel_selected["0"] == $(michael.left)["0"]){
                    console.log("LEFT");
                    carousel_info = "-=";
                }
                if(carousel_selected["0"] == $(michael.right)["0"]){
                    console.log("RIGHT");
                    carousel_info = "+=";
                }
                
                

    }
                var carousel_item_next_position = []
                var carousel_item_prev_position = []

                carousel_list.forEach(function(value){
                    if (carousel_info == "+="){
                        
                       if(numberParse(value[0].css("left")) >= carousel_item_max_left ){
                           console.log("hit")
                           value[0].stop().animate({
                               left:0 - browser_window.outerWidth.toString()
                           },refresh);
                       }
                    }
                    
                });

                carousel_list.forEach(function(value){
                    
    
                   value[0].animate({
                       left:carousel_info + browser_window.outerWidth.toString()
                   },michael.rate);
                   carousel_item_prev_position.push(numberParse(value[0].css("left")));
                   
                   carousel_item_next_position.push(carousel_operators[carousel_info](numberParse(value[0].css("left")),browser_window.outerWidth));
    
    
                   
                   
                });
                
                console.log("carousel_item_prev_position");
                console.log(carousel_item_prev_position);
                console.log("carousel_item_next_position");
                console.log(carousel_item_next_position);
                
                carousel_repositioner[carousel_info]();
            
            });

            
            
            
}
            
            ///////////////////////////////////////////////////////////////////////////////////
            //  needed to add a div with the carousel choice class becuase, if its never on the page, jquery will ignore it
            // carousel_selected is to let the function extenison know which was clicked and what to do based on that conclusion
            ///////////////////////////////////////////////////////////////////////////////////

        }
        
        
    });
    


