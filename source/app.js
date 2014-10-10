(function(app){

    app.controller('SearchController', ['$http', '$rootScope', function($http, $scope){
        var search = this;
        search.query = '';
        $scope.results = [];
        search.hasTweets = function(){
            return  $scope.results.length > 0;
        };
        search.update = function(){
            $http.jsonp('http://tweetsaver.herokuapp.com/?q=' + search.query + '&count=10&callback=JSON_CALLBACK').success(function(data){
                $scope.results = data.tweets;
            });
        };
    }]);

    app.controller('StoreController', ['$scope', function($scope){
        var store = this;
        store.hasTweets = function(){
            var tweetsList = JSON.parse(localStorage['tweetsaver.tweets']);
            return tweetsList.length > 0;
        };
        store.tweets = (function(){
            var tweets = localStorage['tweetsaver.tweets'];
            return  tweets ? JSON.parse(tweets) : [];
        })();
        store.update = function(){
            var tweets = localStorage['tweetsaver.tweets'];
            store.tweets =  tweets ? JSON.parse(tweets) : [];
        };
        store.remove = function(index){
            var tweetsList = localStorage['tweetsaver.tweets'];
            tweetsList = JSON.parse(tweetsList);
            tweetsList.splice(index,1);
            localStorage['tweetsaver.tweets'] = JSON.stringify(tweetsList);
            store.update();
        };
        $scope.saveLocal = function(){
            var tweet = $scope.results.filter(function(item){
                return item.id == $scope.tweetId
                    });
            var tweetsList = localStorage['tweetsaver.tweets'] || '[]';
            tweetsList = JSON.parse(tweetsList);
            var doubles = tweetsList.filter(function(item){
                return item.id == $scope.tweetId
            });
            if (tweet.length > 0 && doubles.length < 1){
                var customTweet ={};
                customTweet.id = tweet[0].id;
                customTweet.createdAt = tweet[0].createdAt;
                customTweet.text = tweet[0].text;
                customTweet.user = {};
                customTweet.user.name = tweet[0].user.name;
                customTweet.user.screenName = tweet[0].user.screenName;
                customTweet.user.profileImageUrlHttps = tweet[0].user.profileImageUrlHttps;
                tweetsList.push(customTweet);
                store.tweets = tweetsList;
                localStorage['tweetsaver.tweets'] = JSON.stringify(tweetsList);
            }
        };
    }]);

})(angular.module('tvds.tweetSaver', [
    'ngSanitize',
    'tvds.draggable',
    'tvds.droppable'
]));
