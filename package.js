Package.describe({
	summary: "login and logout callbacks on the client.",
	version: "1.0.0",
	name: 'peppelg:on-login-logout',
	git: "https://github.com/PeppeL-G/on-login-logout.git"
})

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.0.1')
	api.use(['accounts-base', 'deps'], 'client')
	api.addFiles('client.js', 'client')
})