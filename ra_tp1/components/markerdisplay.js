arcs_module(function(ARCS) {
    var MarkerDisplay;
    
    MarkerDisplay = ARCS.Component.create(
        function( selector ) {
            var displayZone = document.querySelector(selector);
            
            this.setMarkers = function(markers) {
                var res = "";
                var i;
                
                if (markers.length > 0) {
                    res = "Marker detected: ";  
                    for(var j = 0 ; j < markers.length ; j++){
                        res += markers[j].id; 
                        res += ", ";
                    }                  
                                    
                } else {
                    res = "Marker not detected";
                }
                
                if (displayZone !== null) {
                    displayZone.innerHTML = res;
                }                
            }
        },'setMarkers'
    );
    
    return { MarkerDisplay: MarkerDisplay };
});