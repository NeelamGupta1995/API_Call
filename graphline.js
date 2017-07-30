var testApp = angular.module('testApp',[]);
testApp.controller('detailsController',function($scope,$http)
 {
	 
	 
	$http({
		'method':'GET',
		'url':'http://acadview.getsandbox.com/attendace',
		'headers':{
			'Content-Type': 'application/json'
		},
	}).then(function(response){
		$scope.obj={}
		
		obj=response;
		console.log(obj);
		attendance_array = obj['data']['result'];
		
		
		
	})
	
	
	
	
	
	
 });