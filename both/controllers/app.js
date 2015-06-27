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