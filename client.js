var loginCallbacks = []
var logoutCallbacks = []

var isLoggedIn = function(){
	return (Meteor.userId() != null)
}

Accounts.onLogin = function(callback){
	
	loginCallbacks.push(callback)
	
	if(isLoggedIn()){
		callback()
	}
	
}

Accounts.onLogout = function(callback){
	logoutCallbacks.push(callback)
}

var wasLoggedIn = false

Deps.autorun(function(computation){
	
	var isLoggedInNow = isLoggedIn()
	
	if(!wasLoggedIn && isLoggedInNow){
		for(var i=0; i<loginCallbacks.length; i++){
			loginCallbacks[i]()
		}
	}else if(wasLoggedIn && !isLoggedInNow){
		for(var i=0; i<logoutCallbacks.length; i++){
			logoutCallbacks[i]()
		}
	}
	
	wasLoggedIn = isLoggedInNow
	
})