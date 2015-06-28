Template.newBid.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var services = []
    $("input[name='what[]']:checked").each(function () {
      services.push($(this).val());
    });

    _id = Bids.insert({
      providerId: Providers.findOne({owner: Meteor.userId()})._id,
      requestId: e.target.requestId.value,
      price: e.target.price.value,
      comments: e.target.desc.value,
      services: services
    });

    Meteor.call('notifyBid', _id);
    // Router.go('showRequest', {_id: e.target.requestId.value});
    goPrev('new_bid', 'show_request');
  }
});