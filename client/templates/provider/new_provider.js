Template.newProvider.onRendered(function() {
  $('select').material_select();
});

Template.newProvider.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var services = []
    $("input[name='what[]']:checked").each(function () {
      services.push($(this).val());
    });

    Providers.insert({
      name: e.target.name.value,
      type: e.target.type.value,
      desc: e.target.desc.value,
      services: services
    });
  }
})