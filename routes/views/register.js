var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');
var Useer = keystone.list('User');
var fs = require('fs');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'register';
	locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;

	locals.ages = Useer.fields.ages.ops;
	// locals.ageplay = Useer.fields.ageplay.ops;
	locals.ageplayMonth = Useer.fields.ageplayMonth.ops;
	locals.ageplayYear = Useer.fields.ageplayYear.ops;
	locals.gender = Useer.fields.gender.ops;
	locals.sexorientation = Useer.fields.sexorientation.ops;
	// locals.yourType = Useer.fields.yourType.ops;
	locals.Rstatus = Useer.fields.Rstatus.ops;
	locals.timeZone = Useer.fields.timeZone.ops;


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

	locals.errorMsg = [];
	view.on('post', { action: 'register' }, function (next) {
		var User = keystone.list('User').model;
		var imageName = "username_" + locals.formData.name + '.' + req.files.file.extension;
		fs.readFile(req.files.file.path, function(err, data) {
			if(err) {
				return console.log(err);
			}
			fs.writeFile(__dirname + '../../../public/uploads/files/' + imageName , data, function(err) {
				if(err) {
					return console.log(err);
				}
				console.log("The file was saved!");
			});
		});
		 
		
		var user = new User({
		    name: {
				first: locals.formData.name,
				last: ''
			},
			email: locals.formData.email,
			password: locals.formData.password,
			ages: locals.formData.ages,
			// ageplay: locals.formData.ageplay,
			ageplayMonth: locals.formData.ageplayMonth,
			ageplayYear: locals.formData.ageplayYear,
			gender: locals.formData.gender,
			sexorientation: locals.formData.sexorientation,
			yourType: locals.formData.yourType,
			caregaver: locals.formData.caregaver,
			Rstatus: locals.formData.Rstatus,
			timeZone: locals.formData.timeZone,
			hobbies: locals.formData.hobbies,
			movies: locals.formData.movies,
			books: locals.formData.books,
			music: locals.formData.music,
			diapers: locals.formData.diapers,
			stuffies: locals.formData.stuffies,
			pacifiers: locals.formData.pacifiers,
			message: locals.formData.message,
			image: imageName,
			isAdmin: false
		});
		user.save(function (err) {
			if (err) {
				// handle error
				// if (err.code == 11000) {
				// 	locals.errorMsg.push("Email already exist!");
				// 	res.render('register', locals.errorMsg);
				// }
				locals.errorMsg.push("User/Email already exist!");
				// locals.errorMsg.push(" already exist!");
				res.render('register', locals.errorMsg);		
			}
			else {
				res.redirect('/keystone/signin');
			}
		});

	});

	view.render('register');
};
