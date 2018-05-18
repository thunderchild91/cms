var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');
var User = keystone.list('User');


exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'members';
	locals.data = {
		posts: [],
	};
    User = keystone.list('User');
 
	User.model.find()
		.sort('_id')
		.limit(5)
		.exec(function(err, posts) {
			// do something with posts
			console.log(posts)
		});
	console.log(locals.data.posts);

	view.render('members');
};
