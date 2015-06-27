Template.newProvider.onRendered(function() {
  $('select').material_select();
});

Template.newProvider.events({
  'submit form': function(e, t) {
    e.preventDefault();

    Providers.insert({
      name: e.target.name.value,
      type: e.target.type.value,
      desc: e.target.desc.value
    });
  }
})