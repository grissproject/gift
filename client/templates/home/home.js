

Template.home.helpers({
  'requests': function() { return Requests.find({}, {sort: {createdAt: -1}}); }
});

