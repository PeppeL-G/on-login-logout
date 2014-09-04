on-login-logout
===============
A Meteor package adding the ability to listen for users logging in and out. Adds
the methods `Accounts.onLogin(callback)` and `Accounts.onLogout(callback)`.

Note 1: the methods are only added on the client.

Note 2: the methods can be called multiple times.

Note 3: if the user is logged in at the moment `Accounts.onLogin` is called, the
callback will fire immediately.

Example
-------
Automatically subscribe to a publish when a user is logged in.

```javascript
var handle

Accounts.onLogin(function(){
	handle = Meteor.subscribe('userStuff')
})

Accounts.onLogout(function(){
	handle.stop()
	handle = null
})
```