AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

RequestsController = AppController.extend({
  waitOn: function() {
    return this.subscribe('requests');
  },
  data: {
    requests: Requests.find({})
  }
});

ProvidersController = AppController.extend({
  waitOn: function() {
    return this.subscribe('providers');
  },
  data: {
    providers: Providers.find({})
  }
});