var loginCallbacks = []
var logoutCallbacks = []

Accounts.addLoginCallback = function(callback){
	loginCallbacks.push(callback)
}

Accounts.addLogoutCallback = function(callback){
	logoutCallbacks.push(callback)
}

var wasLoggedIn = false

Deps.autorun(function(computation){
	
	var isLoggedIn = (Meteor.userId() != null)
	
	if(!wasLoggedIn && isLoggedIn){
		for(var i=0; i<loginCallbacks.length; i++){
			loginCallbacks[i]()
		}
	}else if(wasLoggedIn && !isLoggedIn){
		for(var i=0; i<logoutCallbacks.length; i++){
			logoutCallbacks[i]()
		}
	}
	
	wasLoggedIn = isLoggedIn
	
})