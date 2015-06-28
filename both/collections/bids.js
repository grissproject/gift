Bids = new Mongo.Collection('bids');

Bids.helpers({

});

Bids.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Bids.attachSchema(new SimpleSchema({
  providerId: {
    type: String,
    optional: true
  },
  requestId: {
    type: String,
    optional: true
  },
  price: {
    type: Number,
    optional: true
  },
  services: {
    type: [String],
    optional: true
  },
  comments: {
    type: String,
    optional: true
  }
}));
