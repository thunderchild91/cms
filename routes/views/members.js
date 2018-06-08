var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');
var User = keystone.list('User');


exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'members';
	// locals.data = {
	// 	posts: [],
	// };
	// // locals.posts = [];
    // User = keystone.list('User');
	// view.on('init', function (next) {
	// 	User.model.find()
	// 		.sort('_id')
	// 		.exec(function(err, posts) {
	// 			// do something with posts
	// 			locals.data.posts = posts;
	// 			// locals.data.posts.push(posts);
	// 			next(err);
	// 		});
	// });

	locals.data = {
		users: []
	};
	view.on('init', function (next) {
		var q = keystone.list('User').paginate({
			page: req.query.page || 1,
			perPage: 25,
			maxPages: 10,
			
		})
			.sort('sortOrder')
			

		q.exec(function (err, results) {
			locals.data.users = results;
			next(err);
		});
	});


	// view.query('users', keystone.list('User').model.find().sort('sortOrder'));

	view.render('members');
};
