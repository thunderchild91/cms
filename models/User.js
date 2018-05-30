var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * User Model
 * ==========
 */

var User = new keystone.List('User');

User.add({
	name: { type: Types.Name, initial: true, required: true, unique: true },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
	ages: { type: Types.Select, options: [
		{value: '13-17', label: '13-17'},
		{value: '18+', label: '18+'}
	], initial: true, required: true },
	// ageplay: { type: Types.Select, options: [
	// 	{value: 'Months', label: 'Months'},
	// 	{value: 'Years', label: 'Years'}
	// ] },
	ageplayMonth: { type: Types.Select, options: [
		{value: '0', label: '0'},
		{value: '1', label: '1'},
		{value: '2', label: '2'},
		{value: '3', label: '3'},
		{value: '4', label: '4'},
		{value: '5', label: '5'},
		{value: '6', label: '6'},
		{value: '7', label: '7'},
		{value: '8', label: '8'},
		{value: '9', label: '9'},
		{value: '10', label: '10'},
		{value: '11', label: '11'},
		{value: '12', label: '12'}
	] },
	ageplayYear: { type: Types.Select, options: [
		{value: '0', label: '0'},
		{value: '1', label: '1'},
		{value: '2', label: '2'},
		{value: '3', label: '3'},
		{value: '4', label: '4'},
		{value: '5', label: '5'},
		{value: '6', label: '6'},
		{value: '7', label: '7'},
		{value: '8', label: '8'},
		{value: '9', label: '9'},
		{value: '10', label: '10'},
		{value: '11', label: '11'},
		{value: '12', label: '12'}
	] },
	gender: { type: Types.Select, options: [
		{value: 'Female', label: 'Female'},
		{value: 'MtF', label: 'MtF'},
		{value: 'Male', label: 'Male'},
		{value: 'FtM', label: 'FtM'},
		{value: 'BiGender', label: 'BiGender'},
		{value: 'GenderFluid', label: 'GenderFluid'},
	], initial: true, required: true },
	sexorientation: { type: Types.Select, options: [
		{value: 'Straight', label: 'Straight'},
		{value: 'Bisexual', label: 'Bisexual'},
		{value: 'Gay', label: 'Gay'},
		{value: 'Lesbian', label: 'Lesbian'},
		{value: 'Pansexual', label: 'Pansexual'},
		{value: 'Asexual', label: 'Asexual'},
		{value: 'Polysexual', label: 'Polysexual'},
	] },
	yourType: { type: Types.TextArray, options: [
		{value: 'Incontinence User', label: 'Incontinence User'},
		{value: 'Adult Baby', label: 'Adult Baby'},
		{value: 'BabyFur', label: 'BabyFur'},
		{value: 'DiaperFur', label: 'DiaperFur'},
		{value: 'Diaper Lover', label: 'Diaper Lover'},
		{value: 'Mommy', label: 'Mommy'},
		{value: 'Daddy', label: 'Daddy'},
		{value: 'Domme', label: 'Domme'},
		{value: 'Babysitter', label: 'Babysitter'},
		{value: 'Little', label: 'Little'},
		{value: 'Sissy', label: 'Sissy'},
	] },
	caregaver: { type: Types.Text, initial: true },
	Rstatus: { type: Types.Select, options: [
		{value: 'Single', label: 'Single'},
		{value: 'Taken', label: 'Taken'},
		{value: 'Engaged', label: 'Engaged'},
		{value: 'Married', label: 'Married'},
		{value: 'Other', label: 'Other'},
	] },
	timeZone: { type: Types.Select, options: [
		{value: '-12.0', label: '(GMT -12:00) Eniwetok, Kwajalein'},
		{value: '-11.0', label: '(GMT -11:00) Midway Island, Samoa'},
		{value: '-10.0', label: '(GMT -10:00) Hawai'},
		{value: '-9.0', label: '(GMT -9:00) Alaska'},
		{value: '-8.0', label: '(GMT -8:00) Pacific Time (US &amp; Canada)'},
		{value: '-7.0', label: '(GMT -7:00) Mountain Time (US &amp; Canada)'},
		{value: '-6.0', label: '(GMT -6:00) Central Time (US &amp; Canada), Mexico City'},
		{value: '-5.0', label: '(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima'},
		{value: '-4.0', label: '(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz'},
		{value: '-3.5', label: '(GMT -3:30) Newfoundland'},
		{value: '-3.0', label: '(GMT -3:00) Brazil, Buenos Aires, Georgetown'},
		{value: '-2.0', label: '(GMT -2:00) Mid-Atlantic'},
		{value: '-1.0', label: '(GMT -1:00 hour) Azores, Cape Verde Islands'},
		{value: '0.0', label: '(GMT) Western Europe Time, London, Lisbon, Casablanca'},
		{value: '1.0', label: '(GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris'},
		{value: '2.0', label: '(GMT +2:00) Kaliningrad, South Africa'},
		{value: '3.0', label: '(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg'},
		{value: '3.5', label: '(GMT +3:30) Tehran'},
		{value: '4.0', label: '(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi'},
		{value: '4.5', label: '(GMT +4:30) Kabul'},
		{value: '5.0', label: '(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent'},
		{value: '5.5', label: '(GMT +5:30) Bombay, Calcutta, Madras, New Delhi'},
		{value: '5.75', label: '(GMT +5:45) Kathmandu'},
		{value: '6.0', label: '(GMT +6:00) Almaty, Dhaka, Colombo'},
		{value: '7.0', label: '(GMT +7:00) Bangkok, Hanoi, Jakarta'},
		{value: '8.0', label: '(GMT +8:00) Beijing, Perth, Singapore, Hong Kong'},
		{value: '9.0', label: '(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk'},
		{value: '9.5', label: '(GMT +9:30) Adelaide, Darwin'},
		{value: '10.0', label: '(GMT +10:00) Eastern Australia, Guam, Vladivostok'},
		{value: '11.0', label: '(GMT +11:00) Magadan, Solomon Islands, New Caledonia'},
		{value: '12.0', label: '(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka'},
	] },
	hobbies: { type: Types.Textarea, initial: true },
	movies: { type: Types.Textarea, initial: true },
	books: { type: Types.Textarea, initial: true },
	music: { type: Types.Textarea, initial: true },
	diapers: { type: Types.Textarea, initial: true },
	stuffies: { type: Types.Textarea, initial: true },
	pacifiers: { type: Types.Textarea, initial: true },
	message: { type: Types.Textarea, initial: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});

User.schema.pre('save', function (next){
	var userName = {first: this.name.first, last: ''};
	User.model.find({name: userName}, function (err, item) {
		if (err) {
			next(err);
		}
		if (item.length !== 0) {
			// console.log(item);
			var err = new Error('User name already exist');
			next(err);
		}
		else {
			next();
		}
	})
})
/**
 * Relationships
 */
User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
User.defaultColumns = 'name, email, isAdmin';
User.register();
