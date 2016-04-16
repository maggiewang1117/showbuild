Rhevh7sSub = new SubsManager();

Template.rhevh7.onCreated(function() {
	var self = this;
	self.ready = new ReactiveVar();
	self.autorun(function() {
		var handle = Rhevh7sSub.subscribe('rhevh7');
		self.ready.set(handle.ready());
	});
});


Template.rhevh7.helpers({
	rhevh7sReady: function () {
		return Template.instance().ready.get();
	},

	rhev36: function() {
		return Rhevh7.find({'tag': /.?3\.6.?/i, 'build_name': /.?el7ev/i}, {sort: {'build_name': -1}});
	},


	rhev35: function() {
		return Rhevh7.find({'tag': /.?3\.5.?/i, 'build_name': /.?el7ev/i}, {sort: {'build_name': -1}});
	},
	
});