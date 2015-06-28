AppController = RouteController.extend({
  layoutTemplate: 'appLayout',
});

RequestsController = AppController.extend({
  waitOn: function() {
    return this.subscribe('requests');
  },
  data: {
    requests: Requests.find({})
  }
});

ShowRequestsController = AppController.extend({
  // waitOn: function() {
  //   return this.subscribe('requests');
  // }
});

ProvidersController = AppController.extend({
  waitOn: function() {
    return this.subscribe('providers');
  },
  data: {
    providers: Providers.find({})
  }
});

if (Meteor.isClient) {
  Meteor.subscribe('notifications');
  Meteor.subscribe('requests');
  Meteor.subscribe('providers');
}