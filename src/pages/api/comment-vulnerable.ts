export const POST = async ({
	request,
	cookies,
	redirect,
}: {
	request: Request;
	cookies: any;
	redirect: any;
}) => {
	const form = await request.formData();
	const previous = cookies.get('comments')?.value ?? '';
	const comment = String(form.get('comment') ?? '');
	cookies.set('comments', previous + `<p>${comment}</p>`, { path: '/' });
	return redirect('/vulnerable');
};
