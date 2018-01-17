// in this version adv_clone makes as many clones as the user specifies
    //capabilities:core cloning functionality
    //            : responds if user input is less than 3
    //            : cloning as many items as needed
    //            : returns a length of all the clones

    
    //planned work : simple init cloning, jquery needs to have an object with a clone() on the original clone to work              properly
    //              : return an array of all the desired clones
    
    
    // far in the future
    //             : customization for each clone
    //             : seperation of clones into certain groups and returning an array of the groups
    //             : cloning of more than one selector and returning an array of everything
    


    jQuery.fn.extend({
        adv_clone:function(michael){
            //jquery's cloning function does not work as intended, it thinks a call to more clones, is a call to the same cloned object, when it finally figures things out it is not smart enough to know not to clone the selected list. This method returns an array of how many times you wanted the object to be cloned, for further variation as you please
            
                //determining argument type
                if(typeof(michael) == "number"){
                    var count  = michael;
                }
                
                ////////////////////////////////////////////////////////////////
                
                ////////////////////////////////////////////////////////////////
            
                //if its zero should we throw an error or delete the selection
                var $clone_count = michael -4;
                if($clone_count == -4 ){
                    $(this).remove()
                }
                
                ////////////////////////////////////////////////////////////////
            
                //replication init
                var $clone = $(this).clone();
                if($clone_count > -3 ){
                    $(this).after($clone);
                }
                var $clone_clone  =  $clone.clone();
                var $last_clone = $(this.selector + ":last" );
                if($clone_count > -2){
                    $last_clone.after($clone_clone);
                    
                }

                while($clone_count >= 0){
                    $last_clone.after($last_clone.clone());
                    $clone_count -= 1;
                }
                
            var decision_first = $.map($(this), function(value, index) {
                return [[$(value),undefined]];
            });
                
                return $.map($(this.selector),function(value,index){
                   return $(value)
                });
                    
                ////////////////////////////////////////////////////////////////
                // for future michael will turn into an object determine if michael is an object or the numbers count
                // last clone represents last cloned item
                ////////////////////////////////////////////////////////////////
        }
    });