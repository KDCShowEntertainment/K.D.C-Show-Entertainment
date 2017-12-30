            function wait(ms){
               var start = new Date().getTime();
               var end = start;
               while(end < start + ms) {
                 end = new Date().getTime();
              }
            }
            
var executed = false;
//for toggling
// you can bind each navigator item to an event and trigger the event in appropriate timing to aviod the recusion

        var nav_info = ["Home","Calendar","Contact Us","Venues","Amenities","Cast","Tickets","Back to Screen"]
                $(document).ready(function() {
                    var nav_card = $(".navigator").clone();

                    // $(".nav_container").append(nav_card);
                    $(".navigator").after(nav_card);
                    var i = nav_info.length - 2;
                    //to make up for the additional first
                    while(i != 0){
                        // $(".nav_container").append(nav_card.clone());
                        $(".navigator:last").after(nav_card.clone());
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
                                
                                if(executed == true){
                                    navigator_set[i - 1 ].animate({
                                        left:"18em"
                                    },700,nav_by_one)
                                    console.log("went right")
                                }
                                
                                else{
                                    navigator_set[navigator_set.length- i ].animate({
                                        left:"0em"
                                    },700,nav_by_one)
                                    console.log("went left")
                                    console.log(navigator_set[navigator_set.length- i ])
                                    
                                }
                            
                            
                        }
                    }
                    //this function displays the nav options one by one
                    // for some reason, at a certain point it starts going by two finx this

                    

                    
                    $(".nav_container").css("opacity",".7")
                    
                    $(".nav_header").css("opacity","0")
                    
                    
                    i = 0;
                    
                    // $(".navigator").on("hit", function(){
                    //     $(this).animate({
                    //         left:"18em"
                    //     })
                    // })
                    
                    $(".navigator").on("click mouseover",function () {
                        if (executed === true){
                            return;
                        }
                        
                        console.log(executed)
                        i = 0;
                        interval_count = 0;
                        // if(executed == true){
                        // var show_page = function () {
                        //         i = 0;
                        //         interval_count = 0;
                        //         executed = false;
                        //         $(".nav_header").hide();
                        //         $("body > :not(.navigator)").css("opacity","1")
                        //         $(".nav_container").css({"opacity":"0.7","height":"43em","overflow-y":"visible","overflow-x":"visible","z-index":"25"})
                        //         nav_by_one();
                        //     }
                        //     $(".nav_container ").on("dblclick mouseleave",show_page).on("dblclick",".navigator:last",show_page)
                            
                        // }
                        $("body > :not(.navigator)").css("opacity",".3")
                        // $("div:not(.navigator)").css("opacity",".3")
                        // $(".home_section").css("opacity",".3")
                        
                        $("body").css("opacity","1")
                        $(".nav_container").css({"opacity":"1","height":"30em","overflow-y":"scroll","overflow-x":"hidden","z-index":"25"})
                        $(this).css("opacity","1")
                        $(".nav_header").css("opacity","1");
                        $(".nav_header").show();
                        nav_by_one();
                        // navigator_set.forEach(function (show_up) {
                        //     show_up.trigger("hit");
                        // })
                        i = 0
                        interval_count = 0;
                        executed = true;
                        

                        
                    })
                    // animating navigation select by choose any with navigator, further restricts if one is already chosen
                    
                
                        var show_page = function () {
                            if(executed == true){
                                i = 0;
                                interval_count = 0;
                                executed = false;
                                $(".nav_header").hide();
                                $("body > :not(.navigator)").css("opacity","1")
                                $(".nav_container").css({"opacity":"0.7","height":"43em","overflow-y":"visible","overflow-x":"visible","z-index":"25"})
                                nav_by_one();
                                i = 0;
                                interval_count = 0;
                            }

                            
                        }
                        
                        $(".nav_container ").on("dblclick mouseleave",show_page).on("click",".navigator:last",show_page)

                    
                    
                });