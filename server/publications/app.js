Meteor.publishComposite("requests", function() {
  return {
    find: function() {
      return Requests.find({});
    }
  }
});

Meteor.publishComposite("providers", function() {
  return {
    find: function() {
      return Providers.find({});
    }
  }
});
