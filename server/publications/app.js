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

Meteor.publishComposite("notifications", function() {
  return {
    find: function() {
      return Notifications.find({userId: this.userId});
    }
  }
});

Meteor.publishComposite("bids", function() {
  return {
    find: function() {
      return Bids.find();
    }
  }
});
