Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.route('/items/new', {
  name: 'items.new'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});

Router.route('requests/new', {
  name: 'newRequest',
  controller: 'RequestsController'
});