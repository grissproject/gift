Providers = new Mongo.Collection('providers');

Providers.helpers({

});

Providers.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
  doc.owner = Meteor.userId();
  username = '';
  if (Meteor.user().profile != undefined) {
    username = Meteor.user().profile.name;
  }
  else if (Meteor.user().emails != undefined) {
    username = Meteor.user().emails[0].address;
  }
  doc.username = username;
});

Providers.attachSchema(new SimpleSchema({
  name: {
    type: String,
    optional: true
  },
  type: {
    type: String,
    optional: true
  },
  desc: {
    type: String,
    optional: true
  }
}));
