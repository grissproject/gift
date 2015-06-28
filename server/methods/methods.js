Meteor.methods({
  'notifiyRequet': function (id) {
    rq = Requests.findOne({_id: id});

    providers = Providers.find({}).fetch();

    _.each(providers, function(p) {
      // Check for services
      var notify = false;
      _.each(rq.services, function(s) {
        if (p && p.services) {
          if (_.contains(p.services, s)) {
            notify = true;
          }
        }
      });

      if (notify) {
        Notifications.insert({
          providerId: p._id,
          userId: p.owner,
          userName: p.username,
          requestId: rq._id,
          requestDest: rq.location,
          notificationType: 'request',
          rqUserId: rq.owner,
          rqUserName: username,
          read: false
        });
      }
    });
  },
  'setNotificationsAsRead': function () {
    nots = Notifications.find({userId: this.userId, read: false}).fetch();
    _.each(nots, function(n) {
      Notifications.update(n._id, {$set: {read: true}});
    })
  },
  'notifyBid': function(id) {
    bid = Bids.findOne({_id: id});
    rq = Requests.findOne({_id: bid.requestId});
    prov = Providers.findOne({_id: bid.providerId});

    Notifications.insert({
      providerId: bid.providerId,
      userId: rq.owner,
      userName: rq.username,
      requestId: rq._id,
      requestDest: rq.location,
      notificationType: 'bid',
      rqUserId: prov.owner,
      rqUserName: prov.name,
      read: false
    });
  }
});
