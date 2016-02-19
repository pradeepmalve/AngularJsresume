
app.controller('controller',function($scope, service){
	service.get().then(function (res)
		{
    		$scope.res=res;
	});
});