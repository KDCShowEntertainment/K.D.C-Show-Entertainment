                $(document).ready(function() {
                    var nav_card = $(".navigator").clone();
                    $(".nav_container").append(nav_card);
                    var i = 3;
                    while(i != 0){
                        $(".nav_container").append(nav_card.clone());
                        i -= 1;
                        
                    }
                    
                    var navigator_set = $.map($(".navigator"),function (link_item){
                        return $(link_item)
                    })
                    
                    navigator_set.forEach(function (selection) {
                        
                        console.log(selection.css("left"))
                        
                    })
                    
                    $(".nav_container").css("opacity",".7")
                    
                    $(".navigator").bind("click mouseover",function () {
                        
                        $(":not(.nav_container)").css("opacity",".7")
                        $("body").css("opacity","1")
                        $(".nav_container").css("opacity","1")
                        $(".navigator").css("opacity","1")
                        $(this).animate({
                            left:"18em"
                        })
                    })
                    
                    
                });