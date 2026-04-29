export const POST = async ({
	cookies,
	redirect,
}: {
	cookies: any;
	redirect: any;
}) => {
	cookies.set('lab_session', 'demo-user', {
		path: '/',
		sameSite: 'strict',
		httpOnly: true,
		secure: false,
	});
	return redirect('/protected');
};
