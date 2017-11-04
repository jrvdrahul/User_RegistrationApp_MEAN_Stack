angular.module("myApp",[]);

angular.module("myApp").controller("myController",function($scope,$http,$location){
    $scope.formData={};
	
	console.log( $location.search().bib);

	if( $location.search().bib){
			$scope.formData['bibNo'] = parseInt($location.search().bib);
	}

    $scope.take_snapshot = function() {
        console.log($scope.name);
        // take snapshot and get image data
        Webcam.snap(function (data_uri) {
            // display results in page
            $scope.data_uri=data_uri;
            document.getElementById('results').innerHTML =
                '<h2 id="PhotoClickMessage">Here is your image:</h2>' +
                '<img src="' + data_uri + '"/>';
        });
    }





    $scope.register = function() {
        console.log($scope.formData);
        console.log($scope.data_uri);




        $scope.formData = {
            'email':$scope.formData.email,
            'name':$scope.formData.name,
            'mobileNo':$scope.formData.mobileNo,
            'image':$scope.data_uri,
            'bibNo':$scope.formData.bibNo
             };


        $http.post('/api/User', $scope.formData)
            .success(function(data) {
                $scope.formData={};
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
});

/**
 * Created by rahul on 21-06-2016.
 */
