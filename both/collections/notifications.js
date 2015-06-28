Notifications = new Mongo.Collection('notifications');

Notifications.helpers({

});

Notifications.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Notifications.attachSchema(new SimpleSchema({
  userId: {
    type: String,
    optional: true
  },
  requestId: {
    type: String,
    optional: true
  },
  requestDest: {
    type: String,
    optional: true
  },
  notificationType: {
    type: String,
    optional: true
  },
  rqUserId: {
    type: String,
    optional: true,
  },
  rqUserName: {
    type: String,
    optional: true,
  },
  read: {
    type: Boolean,
    optional: true
  }
}));
