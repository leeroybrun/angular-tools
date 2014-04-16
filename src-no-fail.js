// Directive to reload images that failed to load. It retries 4 times before aborting...
angular.module('myApp').directive('srcNoFail', function() {
    return {
        priority: 99,
        link: function(scope, element, attrs) {
            var nbErrors = 0;
            
            element[0].onerror = function() {
                nbErrors++;
                if(nbErrors >= 4) { this.onerror = null; return; }
                
                var el = this;
                
                setTimeout(function() {
                    element[0].src = attrs.srcNoFail;
                }, 3000);
            };

            element[0].src = attrs.srcNoFail;
        }
    };
});
