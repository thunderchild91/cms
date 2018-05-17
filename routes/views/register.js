var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');
var Useer = keystone.list('User');

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
	locals.ageplay = Useer.fields.ageplay.ops;
	locals.gender = Useer.fields.gender.ops;
	locals.sexorientation = Useer.fields.sexorientation.ops;
	locals.yourType = Useer.fields.yourType.ops;
	locals.Rstatus = Useer.fields.Rstatus.ops;

	// locals.ages = [
	// 	{value: '13-17', label: '13-17'},
	// 	{value: '18+', label: '18+'}
	// ];
	
	// locals.ageplay = [
	// 	{value: 'Months', label: 'Months'},
	// 	{value: 'Years', label: 'Years'}
	// ];
	// locals.gender = [
	// 	{value: 'Female', label: 'Female'},
	// 	{value: 'MtF', label: 'MtF'},
	// 	{value: 'Male', label: 'Male'},
	// 	{value: 'FtM', label: 'FtM'},
	// ];
	// locals.sexorientation = [
	// 	{value: 'Straight', label: 'Straight'},
	// 	{value: 'Bisexual', label: 'Bisexual'},
	// 	{value: 'Gay', label: 'Gay'},
	// 	{value: 'Lesbian', label: 'Lesbian'},
	// 	{value: 'Pansexual', label: 'Pansexual'},
	// 	{value: 'Asexual', label: 'Asexual'},
	// 	{value: 'Polysexual', label: 'Polysexual'},
	// ];
	// locals.yourType = [
	// 	{value: 'Incontinence User', label: 'Incontinence User'},
	// 	{value: 'Adult Baby', label: 'Adult Baby'},
	// 	{value: 'BabyFur', label: 'BabyFur'},
	// 	{value: 'DiaperFur', label: 'DiaperFur'},
	// 	{value: 'Diaper Lover', label: 'Diaper Lover'},
	// 	{value: 'Mommy', label: 'Mommy'},
	// 	{value: 'Daddy', label: 'Daddy'},
	// 	{value: 'Domme', label: 'Domme'},
	// 	{value: 'Babysitter', label: 'Babysitter'},
	// 	{value: 'Little', label: 'Little'},
	// 	{value: 'Sissy', label: 'Sissy'},
	// ];
	// locals.Rstatus = [
	// 	{value: 'Single', label: 'Single'},
	// 	{value: 'Taken', label: 'Taken'},
	// 	{value: 'Engaged', label: 'Engaged'},
	// 	{value: 'Married', label: 'Married'},
	// 	{value: 'Other', label: 'Other'},
	// ];
	
	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'register' }, function (next) {
		var User = keystone.list('User').model;

		var user = new User({
            name: {
                first: locals.formData.first
			},
			email: locals.formData.email,
			password: locals.formData.password,
			ages: locals.formData.ages,
			ageplay: locals.formData.ageplay,
			gender: locals.formData.gender,
			sexorientation: locals.formData.sexorientation,
			yourType: locals.formData.yourType,
			caregaver: locals.formData.caregaver,
			Rstatus: locals.formData.Rstatus,
			address: locals.formData.address,
			hobbies: locals.formData.hobbies,
			interests: locals.formData.interests,
			movies: locals.formData.movies,
			books: locals.formData.books,
			music: locals.formData.music,
			diapers: locals.formData.diapers,
			stuffies: locals.formData.stuffies,
			pacifiers: locals.formData.pacifiers,
			message: locals.formData.message,
			isAdmin: false
        });
		user.save(function (err) {
			if (err) {
				// handle error
				locals.validationErrors = err.errors;
			}
		
			// user has been saved
			console.log(user);
			res.redirect('/keystone/signin');
			// keystone.redirect('/keystone/signin');
			// redirect('/');
			
		});
        // var updater = newUser.getUpdateHandler(req);

        // updater.process(req.body, {
        //     fields: 'email, password',
        //     flashErrors: true,
        //     logErrors: true
        // }, function(err,result) {
        //     if (err) {      
        //         data.validationErrors = err.errors; 
        //     } else {
        //         req.flash('success', 'Account created. Please sign in.');               
        //         return res.redirect('/');
        //     }
        //     next();
        // });


		// var newEnquiry = new Enquiry.model();
		// var updater = newEnquiry.getUpdateHandler(req);
		// updater.process(req.body, {
		// 	flashErrors: true,
		// 	fields: 'name, email, ages, ageplay, gender, sexorientation, yourType, Rstatus, caregaver, address, hobbies, interests, movies, books, music, diapers, stuffies, pacifiers, message',
		// 	errorMessage: 'There was a problem submitting your enquiry:',
		// }, function (err) {
		// 	if (err) {
		// 		console.log("TESTING");
		// 		locals.validationErrors = err.errors;
		// 	} else {
		// 		console.log("TEST");
		// 		// locals.enquirySubmitted = true;
		// 	}
		// 	next();
		// });
	});

	view.render('register');
};
