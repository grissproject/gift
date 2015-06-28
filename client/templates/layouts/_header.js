Template._header.rendered = function() {
  Meteor.setTimeout(function() {
    
    this.$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false,
      hover: false,
      alignment: 'right',
      gutter: 0,
      belowOrigin: true
    });

    this.$('.button-collapse').sideNav({
      menuWidth: 240,
      activationWidth: 70,
      closeOnClick: true
    });

  }.bind(this), 200);
};

Template._header.helpers({
  notificationsCount: function() {
    return Notifications.find({read: false}).count();
  },
  notifications: function() {
    return Notifications.find({}, {sort: {createdAt: -1}});
  }
});

Template._header.events({
  'click #notifications-alert': function() { $('#notifications').openModal(); },
  'click #close-notifications': function() { Meteor.call('setNotificationsAsRead'); }
})
