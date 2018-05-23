var keystone = require('keystone');
var Useer = keystone.list('User');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'blog';
	locals.filters = {
		post: req.params.user,
	};
	locals.data = {
		posts: [],
	};
	locals.timeZone = Useer.fields.timeZone.ops;
	// Load the current post
	view.on('init', function (next) {

		var q = keystone.list('User').model.findOne().where('_id', locals.filters.post);
		// var q = keystone.list('User').model.findOne({'_id': locals.filters.post}, 'email yourType');

		q.exec(function (err, result) {
			if (result.timeZone) {
				for (var key in locals.timeZone) {
					if (locals.timeZone[key].value == result.timeZone) {
						result.timeZone = locals.timeZone[key].label
					}
				}
			}
			locals.data.post = result;
			next(err);
		});

	});

	// Render the view
	view.render('singleuser');
};
