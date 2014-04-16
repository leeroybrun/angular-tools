//
//  Simple replacement for ng-bind-html-unsafe
//
//  Usage : <div ng-bind-html="myScope.myHtml | to_trusted"></div>
//

angular.module('lbTools')
    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);
