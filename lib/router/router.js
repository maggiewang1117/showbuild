
FlowRouter.route('/build_info', {
	action: function() {
	    BlazeLayout.render("ovirtbuild");
	  },
	name: 'ovirtbuild',
})

FlowRouter.route('/rhevh7_info', {
	action: function () {
		BlazeLayout.render("rhevh7");
	},
	name: 'rhevh7'
})



// Router.configure({
// 	layoutTemplate: 'layout',
// 	loadingTemplate: 'loading',
// 	notFoundTemplate: 'notFound',
// 	waitOn: function() {return Meteor.subscribe('buildversion');}
// });

// Router.route('/', {name: 'postsList'});
// Router.route('/posts/:_id', {
// 	name: 'postPage',
// 	data: function() { return Posts.findOne(this.params._id); }
// });
// Router.route('/build_info', {
// 	name: 'ovirtbuild',
// 	data: function() { return Builds.find();}
// });


// Router.onBeforeAction('dataNotFound', {only: 'postPage'});