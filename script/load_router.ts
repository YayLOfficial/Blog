module.exports = () => {
	if(!isLoggedIn())
		return {
			routes: [
				{
					path: "/",
					component: "pages/signin/signin.vue",
					name: "Signin",
				},
				{
					path: "/signup",
					component: "pages/signin/signup.vue",
					name: "Signup"
				}
			]
		}

}

function isLoggedIn() {

	return false;

}