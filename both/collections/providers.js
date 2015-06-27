Providers = new Mongo.Collection('providers');

Providers.helpers({

});

Providers.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
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
