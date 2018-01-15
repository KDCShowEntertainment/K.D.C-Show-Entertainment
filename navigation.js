//  added links to the website
  
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

var correct_format;
//for descrepancy detection
var descrpancy_calls = 0;
// to get rid of excess recursion calls
var correct_link = 0;
var nav_holder;
// for rewritting nav links

        var nav_info = ["Home","Calendar","Contact Us","Story Vote","Amenities","Cast","Tickets","Back to Screen"]
                $(document).ready(function() {
                    
                    $("body").append("<div id ='nav' class = 'div_tester'></div>")

                    
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
                        
                        
                        if(link_item != $("navigator:last")){
                            
                            
                            nav_holder = nav_info[index]
                            if(nav_holder == "Home"){
                                nav_info[index] = "index"
                            }
                            
                            else {
                                while((correct_link) != nav_holder.split(" ").length ){
                                if(correct_link == 0) {
                                    nav_info[index] = nav_holder.split(" ")[0];
                                    if( nav_holder.split(" ").length > 1 ){
                                        nav_info[index] += "_";
                                    }
                                    else{
                                        nav_info[index] = nav_holder.split(" ")[0];
                                    }
                                }
                                
                                
                                else{
                                   if(nav_holder.split(" ")[correct_link + 1] != undefined ){
                                        nav_info[index] += nav_holder.split(" ")[correct_link] + "_";
                                   }
                                   else{
                                       nav_info[index] += nav_holder.split(" ")[correct_link] ;
                                   }
                                }
                                correct_link += 1;
                                
                            }
                            }
                            // link controller
                            correct_link = 0;
                            
                            $(".navigator").eq(index).click(function () {
                                
                                
                                window.location = nav_info[index].toLowerCase() + ".html"
                            })
                        }
                        
                        return $(link_item)
                    })
                    
                    i = 0;
                    j = 0;
                    interval_count = 0;

                    
                    function nav_by_one(){
                        interval_count += 1;
                        if(i == navigator_set.length ){
                            descrpancy_calls += 1;
                            if(descrpancy_calls > 2){
                                console.log(descrpancy_calls)
                                
                                //to stop the descrpancy calls and let the intention finish once it finds the descrpancy, stop must equal true to remove everything on the quene and finish the animation
                                
                            }

                            navigator_set.AllValuesSame(correct_format).forEach(function (bug) {
                                console.log("fixing",bug,correct_format)
                                navigator_set[bug].stop(true).animate({
                                    "left":correct_format
                                })
                                // previous commit

                            })
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
                                    $("#div_tester, #nav.div_tester").css("height","18em");
                                    correct_format = $("#div_tester, #nav.div_tester").css("height")
                                    $("#div_tester, #nav.div_tester").css("height","0em");
                                    navigator_set[i - 1 ].stop().animate({
                                        left:"18em"
                                    },700,nav_by_one)
                                    console.log("went right")
                                }
                                // seems an update allows divs with missing dimensions to be recognized by the browser, so i only change the div just for correct_format to register
                                else{
                                    $("#div_tester, #nav.div_tester").css("height","0em");
                                    correct_format = $("#div_tester, #nav.div_tester").css("height")
                                    navigator_set[navigator_set.length- i ].animate({
                                        left:"0em"
                                    },700,nav_by_one)
                                    console.log("went left")
                                    console.log(navigator_set[navigator_set.length- i ])
                                    
                                }
                                //wanted to use the nav id for all things nav but too late to avoid confusion have two different divs
                            
                        }
                    }
                    //this function displays the nav options one by one
                    // for some reason, at a certain point it starts going by two finx this

                    Array.prototype.AllValuesSame = function(correct_format){
                     

                        var buggy_array = [];
                        if(this.length > 0) {
                            for(var i = 0; i < this.length; i++)
                            {
                                if(this[i].css("left") !== correct_format )
                                    
                                    buggy_array.push(i);
                            }
                        }
                        return buggy_array;
                    }
                    //this function allows the user to put the improper navs in line
                    
                    $(".nav_container").css("opacity",".7")
                    
                    $(".nav_header").css("opacity","0")
                    
                    
                    i = 0;
                    
                    // $(".navigator").on("hit", function(){
                    //     $(this).animate({
                    //         left:"18em"
                    //     })
                    // })
                    

                    
                    $(".nav_container").on("mouseenter").on( " click mouseover",".navigator",function () {
                        if (executed === true){
                            return;
                        }
                        // for some reason jquery is not listening to .nav_container
                        console.log(executed)
                        i = 0;
                        interval_count = 0;

                        $("body > :not(.navigator)").css("opacity",".3")

                        
                        $("body").css("opacity","1")
                        $(".nav_container").css({"opacity":"1","height":"30em","overflow-y":"scroll","overflow-x":"hidden","z-index":"25"})
                        $(this).css("opacity","1")
                        $(".nav_header").css("opacity","1");
                        $(".nav_header").show();
                        nav_by_one();
                        
                        i = 0;
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
                        $(".navigator:last").unbind("click")
                        
                        $(".nav_container ").on("dblclick mouseleave",show_page).on("click",".navigator:last",show_page)

                    
                    
                });