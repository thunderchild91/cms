var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');
var User = keystone.list('User');


exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'members';

	locals.data = {
		users: []
	};
	view.on('init', function (next) {
		var q = keystone.list('User').paginate({
			page: req.query.page || 1,
			perPage: 20,
			maxPages: 10,
			
		})
			.sort('sortOrder')
			

		q.exec(function (err, results) {
			locals.data.users = results;
			next(err);
		});
	});

	view.on('post', { action: 'searchUser' }, function (next) {
		
		if (req.body.search !== "" && req.body.search !== undefined) {
			var q = keystone.list('User').model.findOne({
				"name.first": req.body.search,
			});
	
			q.exec(function (err, result) {
				if (result !== null && result !== undefined)
					res.redirect('blog/singleuser/'+result._id);
				req.flash('error', 'Member does not exsist. Please search for register members');
				next(err);
			});
		}
	});


	view.render('members');
};
