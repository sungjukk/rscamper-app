angular.module('App')
  .controller("CommunityTabsCtrl", function ($rootScope, $scope) {
    console.log("커뮤니티탭");
  })
  .controller("CommunityMainCtrl", function ($rootScope, $scope, $http) {
    // 위로 당겼을 때 새로고침
    $scope.load = function () {
      $http.get()
        .success(function () {
          // db 불러오기
        })
        .finally(function () {
          $scope.$broadcast('scroll.refreshComplete');
        })
    }
    console.log("커뮤니티 메인");
  })
  .controller("CommunityFreeCtrl", function ($rootScope, $scope) {
    console.log("커뮤니티 자유");
  })
  .controller("CommunityTourDiaryCtrl", function ($rootScope, $scope) {
    console.log("커뮤니티 여행기");
  })
  .controller("CommunityInformationCtrl", function ($rootScope, $scope) {
    console.log("커뮤니티 정보");
  })
  .controller("CommunityReviewCtrl", function ($rootScope, $scope) {
    console.log("커뮤니티 리뷰");
  })
