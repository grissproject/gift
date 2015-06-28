Meteor.startup(function() {
  GoogleMaps.load({
    libraries: 'places'
  });
});

Template.newRequest.onRendered(function() {
  this.autorun(function () {
    if (GoogleMaps.loaded()) {
      map = $("#location").geocomplete({ map: '#gmap' });
    }
  });

  $('#from').pickadate();
  $('#to').pickadate();
  $('select').material_select();
});

Template.newRequest.events({
  'submit form': function(e, t) {
    e.preventDefault();
    
    var services = []
    $("input[name='what[]']:checked").each(function () {
      services.push($(this).val());
    });

    var _id = Requests.insert({
      location: e.target.location.value,
      from: e.target.from.value,
      to: e.target.to.value,
      adults: e.target.adults.value,
      childs: e.target.childs.value,
      budget_from: e.target.budget_from.value,
      budget_to: e.target.budget_to.value,
      services: services
    });
    Meteor.call('notifiyRequet', _id);
    Router.go('showRequest', {_id: _id});
  }
})

goNext = function(a, b) {
  $('.' + a).hide("slide", { direction: "left" }, 99);
  setTimeout( function () { $('.' + b).show("slide", { direction: "right" }, 300); }, 100);
  updateResume();
}

goPrev = function(a, b) {
  $('.' + a).hide("slide", { direction: "right" }, 99);
  setTimeout( function () { $('.' + b).show("slide", { direction: "left" }, 300); }, 100);
  updateResume();
}

updateResume = function() {
  $('#location_str').html($('#location').val());
  $('#from_str').html($('#from').val());
  $('#to_str').html($('#to').val());
  $('#adults_str').html($('#adults').val());
  $('#childs_str').html($('#childs').val());
  $('#budget_from_str').html($('#budget_from').val());
  $('#budget_to_str').html($('#budget_to').val());

  var what_arr = []
  $("input[name='what[]']:checked").each(function () {
    what_arr.push($(this).val());
  });

  $('#services_str').html(what_arr.join(', '));
}