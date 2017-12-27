            function wait(ms){
               var start = new Date().getTime();
               var end = start;
               while(end < start + ms) {
                 end = new Date().getTime();
              }
            }
            


                $(document).ready(function() {
                    var nav_card = $(".navigator").clone();

                    $(".nav_container").append(nav_card);
                    var i = 3;
                    while(i != 0){
                        $(".nav_container").append(nav_card.clone());
                        i -= 1;
                        
                    }
                    var navigator_set = $.map($(".navigator"),function (link_item,index){
                        $(".navigator > h3").eq(index).css({"text-align":"center","margin-top":"-.3em"})
                        return $(link_item)
                    })
                    
                    i = 0;
                    function nav_by_one(){
                        if(i == navigator_set.length){
                            
                            return;
                        }
                        else{
                            i += 1;
                            navigator_set[i -1].animate({
                                left:"18em"
                            },700,nav_by_one)
                            
                            
                        }
                    }
                    //this function displays the nav options one by one
                    // for some reason, at a certain point it starts going by two finx this

                    

                    
                    $(".nav_container").css("opacity",".7")
                    $(".nav_header").css("opacity","0")
                    
                    
                    i = 0
                    $(".nav_container").one("click mouseover",function () {
                        
                        $("body > :not(.navigator)").css("opacity",".3")
                        // $("div:not(.navigator)").css("opacity",".3")
                        // $(".home_section").css("opacity",".3")
                        
                        $("body").css("opacity","1")
                        $(this).css("opacity","1")
                        $(".navigator").css("opacity","1")
                        $(".nav_header").css("opacity","1")
                        nav_by_one();
                        i = 0
                        

                        
                    })
                    // animating navigation
                    
                    
                });