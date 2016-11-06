angular.module('admin-users-edit', [
    'service.crud',
    'services.i18nNotification',
    'admin-users-edit-uniqueEmail',
    'admin-users-edit-validateEquals'
])

.controller('UsersEditCtrl', [$scope, '$location', 'i18nNotification', 'user',
    function ($scope, $location, $i18nNotification, user) {

    $scope.user = user;
    $scope.password = user.password;

    $scope.onSave = function (user) {
        i18nNotification.pushForNextRoute('crud.user.save.success', 'success', {id : user.$id()});
        $location.path('/admin/users');
    };

    $scope.onError = function () {
        i18nNotification.pushCurrentRoute('crud.user.save.error', 'error');
    };

    $scope.onRemove = function (user) {
        i18nNotification.pushForNextRoute('crud.user.remove.success', 'success', {id : user.$id()});
        $location.path('/admin/users');
    };

}]);