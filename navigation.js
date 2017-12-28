            function wait(ms){
               var start = new Date().getTime();
               var end = start;
               while(end < start + ms) {
                 end = new Date().getTime();
              }
            }
            

// you can bind each navigator item to an event and trigger the event in appropriate timing to aviod the recusion

        var nav_info = ["Home","Calendar","Contact Us","Venues","Amenities","Cast","Tickets"]
                $(document).ready(function() {
                    var nav_card = $(".navigator").clone();

                    $(".nav_container").append(nav_card);
                    var i = 5;
                    while(i != 0){
                        $(".nav_container").append(nav_card.clone());
                        i -= 1;
                        
                    }
                    var navigator_set = $.map($(".navigator"),function (link_item,index){
                        $(".navigator > h3").eq(index).css({"text-align":"center","margin-top":"-.3em"})
                        
                        $(".navigator > h3").eq(index).text(nav_info[index])
                        return $(link_item)
                    })
                    
                    i = 0;
                    j = 0;
                    interval_count = 0;
                    function nav_by_one(){
                        interval_count += 1;
                        if(i == navigator_set.length){
                            
                            return;
                        }
                        else{
                            i+= 1;
                            console.log("animating",i)
                            
                            if (interval_count > i){
                                i = interval_count;
                            }
                            console.log(interval_count,i)
                            
                                navigator_set[i - 1 ].animate({
                                    left:"18em"
                                },700,nav_by_one)
                            
                            
                            
                        }
                    }
                    //this function displays the nav options one by one
                    // for some reason, at a certain point it starts going by two finx this

                    

                    
                    $(".nav_container").css("opacity",".7")
                    
                    $(".nav_header").css("opacity","0")
                    
                    
                    i = 0
                    
                    // $(".navigator").on("hit", function(){
                    //     $(this).animate({
                    //         left:"18em"
                    //     })
                    // })
                    var executed = false;
                    $(".navigator").one("click mouseover",function () {
                        if (executed == true){
                            return
                        }
                        executed = true;
                        $("body > :not(.navigator)").css("opacity",".3")
                        // $("div:not(.navigator)").css("opacity",".3")
                        // $(".home_section").css("opacity",".3")
                        
                        $("body").css("opacity","1")
                        $(".nav_container").css({"opacity":"1","height":"30em","overflow-y":"scroll","overflow-x":"hidden"})
                        $(this).css("opacity","1")
                        $(".nav_header").css("opacity","1")
                        nav_by_one();
                        // navigator_set.forEach(function (show_up) {
                        //     show_up.trigger("hit");
                        // })
                        i = 0
                        

                        
                    })
                    // animating navigation select by choose any with navigator, further restricts if one is already chosen
                    
                    
                });