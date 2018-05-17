var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var User = new keystone.List('User');
User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
	ages: { type: Types.Select, options: [
		{value: '13-17', label: '13-17'},
		{value: '18+', label: '18+'}
	] },
	ageplay: { type: Types.Select, options: [
		{value: 'Months', label: 'Months'},
		{value: 'Years', label: 'Years'}
	] },
	gender: { type: Types.Select, options: [
		{value: 'Female', label: 'Female'},
		{value: 'MtF', label: 'MtF'},
		{value: 'Male', label: 'Male'},
		{value: 'FtM', label: 'FtM'},
	] },
	sexorientation: { type: Types.Select, options: [
		{value: 'Straight', label: 'Straight'},
		{value: 'Bisexual', label: 'Bisexual'},
		{value: 'Gay', label: 'Gay'},
		{value: 'Lesbian', label: 'Lesbian'},
		{value: 'Pansexual', label: 'Pansexual'},
		{value: 'Asexual', label: 'Asexual'},
		{value: 'Polysexual', label: 'Polysexual'},
	] },
	yourType: { type: Types.Select, options: [
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
	caregaver: { type: Types.Text, initial: true, required: true },
	Rstatus: { type: Types.Select, options: [
		{value: 'Single', label: 'Single'},
		{value: 'Taken', label: 'Taken'},
		{value: 'Engaged', label: 'Engaged'},
		{value: 'Married', label: 'Married'},
		{value: 'Other', label: 'Other'},
	] },
	address: { type: Types.Text, initial: true, required: true },
	hobbies: { type: Types.Markdown, initial: true, required: true },
	interests: { type: Types.Markdown, initial: true, required: true },
	movies: { type: Types.Markdown, initial: true, required: true },
	books: { type: Types.Markdown, initial: true, required: true },
	music: { type: Types.Markdown, initial: true, required: true },
	diapers: { type: Types.Markdown, initial: true, required: true },
	stuffies: { type: Types.Markdown, initial: true, required: true },
	pacifiers: { type: Types.Markdown, initial: true, required: true },
	message: { type: Types.Markdown, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
User.defaultColumns = 'name, email, isAdmin';
User.register();
