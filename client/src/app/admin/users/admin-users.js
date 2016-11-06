angular.module('amdin-users', [
    'admin-users-list',
    'admin-users-edit',

    'services.crud',
    'security.authorization',
    'directives.gravatar'
])

.config(['crudRouteProvider', 'securityAuthorizationProvider',
    function (crudRouteProvide, securityAuthorizationProvider) {

    crudRouteProvide.routesFor('Users', 'admin')
    .whenList({
        users: ['Users', function (users) { return Users.all(); }],
        currentUser: securityAuthorizationProvider.requireAdminUser
    })
    .whenNew({
        user: ['Users', function (Users) { return new Users(); }],
        currentUser: securityAuthorizationProvider.requireAdminUser
    })
    .whenEdit({
        user:[$route, 'User', function ($route, Users) {
            return Users.getById($route.current.params.itemId);
        }],
        currentUser: securityAuthorizationProvider.requireAdminUser
    });
}]);