// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
    'name': 'CMS',
    'brand': 'CMS',

    'less': 'public',
    'static': 'public',
    'favicon': 'public/favicon.ico',
    'views': 'templates/views',
    'view engine': 'pug',

    'auto update': true,
    'session': true,
    'auth': true,
    'user model': 'User',
    'mongo': 'mongodb://root:Danger0us@cluster0-shard-00-00-ahtuk.mongodb.net:27017,cluster0-shard-00-01-ahtuk.mongodb.net:27017,cluster0-shard-00-02-ahtuk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
    _: require('lodash'),
    env: keystone.get('env'),
    utils: keystone.utils,
    editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));

keystone.set('signin redirect', '/');

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
    posts: ['posts', 'post-categories'],
    galleries: 'galleries',
    enquiries: 'enquiries',
    users: 'users',
});

// Start Keystone to connect to your database and initialise the web server


keystone.start();
