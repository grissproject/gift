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
  only: ['dashboard', 'newRequest', 'newProvider']
});

Router.route('requests/new', {
  name: 'newRequest',
  controller: 'RequestsController'
});

Router.route('requests/show/:_id', {
  name: 'showRequest',
  controller: 'ShowRequestsController',
  data: function() { return Requests.findOne({_id: this.params._id}) }
});

Router.route('providers/new', {
  name: 'newProvider',
  controller: 'ProvidersController'
});

Router.route('requests/bids/:_id', {
  name: 'bidComments',
  data: function() { return Bids.findOne({_id: this.params._id}) }
});

Router.route('requests/index', {
  name: 'requestsList'
});