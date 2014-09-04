Package.describe({
	summary: "login and logout callbacks on the client.",
	version: "1.0.0",
	name: 'peppelg:on-login-logout',
	git: " \* Fill me in! *\ "
})

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.0.1')
	api.use('accounts-base', 'client')
	api.addFiles('client.js', 'client')
})

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('on-logout');
	api.addFiles('on-logout-tests.js');
})