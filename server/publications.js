Meteor.publish('buildversion', function() {
	return Builds.find({});
});


Meteor.publish('rhevh7', function(){
	return Rhevh7.find({});
})