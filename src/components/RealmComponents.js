import React from "react";

import * as Realm from "realm-web";

// Connect to your MongoDB Realm app
const REALM_APP_ID = "ios-club-website-rsiyw"; // e.g. myapp-abcde
export const realmApp = new Realm.App({ id: REALM_APP_ID });

// Create a component that displays the given user's details
export function UserDetail({ user }) {

	return (
		<div>
			<div>Logged in with anonymous id: {user.id}</div>
		</div>
	);
}

// Create a component that lets an anonymous user log in
export function Login({ setUser }) {

	const loginAnonymous = async () => {
		const user = await realmApp.logIn(Realm.Credentials.anonymous());
		setUser(user);
	};

	return <button onClick={loginAnonymous}>Log In</button>;
}
