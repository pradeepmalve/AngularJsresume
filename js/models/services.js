
app.factory('service', function ($http) {
    return {
        get: function () {
            return $http.get('js/modules/resume.json');
        }
    };
});