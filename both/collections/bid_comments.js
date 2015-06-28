BidComments = new Mongo.Collection('bidcomments');

BidComments.helpers({

});

BidComments.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
  doc.userId = Meteor.userId();
  username = '';
  if (Meteor.user().profile != undefined) {
    username = Meteor.user().profile.name;
  }
  else if (Meteor.user().emails != undefined) {
    username = Meteor.user().emails[0].address;
  }
  doc.username = username;
});

BidComments.attachSchema(new SimpleSchema({
  bidId: {
    type: String,
    optional: true
  },
  userId: {
    type: String,
    optional: true
  },
  username: {
    type: String,
    optional: true
  },
  comments: {
    type: String,
    optional: true
  }
}));
