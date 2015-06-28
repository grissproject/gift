UI.registerHelper('formatTime', function(context, options) {
  if (context)
    return moment(context).format('LL');
});

UI.registerHelper('isProvider', function(context, options) {
  return Providers.find({owner: Meteor.userId()}).count() != 0;
});