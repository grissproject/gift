Requests = new Mongo.Collection('requests');

Requests.helpers({

});

Requests.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Requests.attachSchema(new SimpleSchema({
  location: {
    type: String,
    optional: true
  },
  from: {
    type: Date,
    optional: true
  },
  to: {
    type: Date,
    optional: true
  },
  adults: {
    type: Number,
    optional: true
  },
  childs: {
    type: Number,
    optional: true
  },
  budget_from: {
    type: Number,
    optional: true
  },
  budget_to: {
    type: Number,
    optional: true
  },
  services: {
    type: [String],
    optional: true
  }
}));
