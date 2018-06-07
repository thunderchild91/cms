var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');
var Useer = keystone.list('User');
var fs = require('fs');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.formData = req.body || {};
	// Set locals
	locals.section = 'profile';
	locals.ages = Useer.fields.ages.ops;
	// locals.ageplay = Useer.fields.ageplay.ops;
	locals.gender = Useer.fields.gender.ops;
	locals.sexorientation = Useer.fields.sexorientation.ops;
	locals.Rstatus = Useer.fields.Rstatus.ops;
	locals.timeZone = Useer.fields.timeZone.ops;
	locals.ageplayMonth = Useer.fields.ageplayMonth.ops;
	locals.ageplayYear = Useer.fields.ageplayYear.ops;
	locals.yourType = [
		{ value: 'Incontinence User', label: 'Incontinence User' },
		{ value: 'Adult Baby', label: 'Adult Baby' },
		{ value: 'BabyFur', label: 'BabyFur' },
		{ value: 'DiaperFur', label: 'DiaperFur' },
		{ value: 'Diaper Lover', label: 'Diaper Lover' },
		{ value: 'Mommy', label: 'Mommy' },
		{ value: 'Daddy', label: 'Daddy' },
		{ value: 'Domme', label: 'Domme' },
		{ value: 'Babysitter', label: 'Babysitter' },
		{ value: 'Little', label: 'Little' },
		{ value: 'Sissy', label: 'Sissy' },
	];
	locals.password;
	locals.enquirySubmitted = false;

	User = keystone.list('User');
	view.on('post', { action: 'update' }, function (next) {
		// User.model.findById(req.user._id, function (err, item) {

		// 	if (err) return res.status(500).json({ error: 'database error', detail: err });
		// 	if (!item) return res.status(404).json({ error: 'not found', id: req.params.id });
		// 	if (req.body.password == "") {
		// 		req.body.password = req.user.password;
		// 	}
		// 	console.log(req.body);

		// 	});
		// });

		if (req.body.password == "") {
			req.body.password = req.user.password;
		}
		User.model.update({ _id: req.user._id }, req.body, {}, function (err) {
			if (err) {
				var status = err.error === 'validation errors' ? 400 : 500;
				var error = err.error === 'database error' ? err.detail : err;
			}
			else {
				if (Object.keys(req.files).length > 0) {
					console.log(req.files);
					var imageName = "username_" + req.user.name.first  + '.' + req.files.file.extension;
					fs.readFile(req.files.file.path, function(err, data) {
						if(err) {
							return console.log(err);
						}
						fs.writeFile(__dirname + '/../../../public/uploads/files/' + imageName , data, function(err) {
							if(err) {
								return console.log(err);
							}
							console.log("The file was saved!");
						});
					});
				}
				
				res.redirect('/profile');
			}
		});

	});


	view.render('profile');
};
