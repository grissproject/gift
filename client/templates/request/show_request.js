Template.showRequest.helpers({
  offersCount: function() {
    return Bids.find({requestId: this._id}).count();
  },
  hasOffers: function() {
    return Bids.find({requestId: this._id}).count() > 0;
  },
  offers: function() {
    return Bids.find({requestId: this._id});
  }
});

Template.showBid.helpers({
  'commentsCount': function() {
    return BidComments.find({bidId: this._id}).count();
  },
  bidder: function() {
    return Providers.findOne({_id: this.providerId}).name;
  }
});

Template.bidComments.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var _id = BidComments.insert({
      bidId: e.target.bid_id.value,
      comments: e.target.comment.value
    });

    Meteor.call('notifyComment', e.target.bid_id.value);
  }
});

Template.bidComments.helpers({
  'commentsCount': function() {
    return BidComments.find({bidId: this._id}).count();
  },
  'comments': function() {
    return BidComments.find({bidId: this._id});
  },
  'rqId': function() {
    return Bids.findOne({_id: this._id}).requestId;
  }
});