BuildsSub = new SubsManager();


Template.ovirtbuild.onCreated(function() {
  var self = this;
  self.ready = new ReactiveVar();
  self.autorun(function() {
    var handle = BuildsSub.subscribe('buildversion');
    self.ready.set(handle.ready());
  });

});

Template.ovirtbuild.helpers({
	buildsReady: function () {
		return Template.instance().ready.get();
	},

	builds: function () {
		return Builds.find({}, {sort: {'release_name': -1}});
		// return Builds.find({$sort:{'release_name': -1}});
	},
});