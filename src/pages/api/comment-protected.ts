const escapeHtml = (s: string) =>
	s.replace(
		/[&<>'"]/g,
		(c) =>
			({
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				"'": '&#39;',
				'"': '&quot;',
			})[c]!,
	);

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
	if (form.get('csrf') !== cookies.get('csrf_token')?.value)
		return new Response('CSRF-token saknas eller är fel', { status: 403 });

	const previous = cookies.get('safe_comments')?.value ?? '';
	const comment = escapeHtml(String(form.get('comment') ?? ''));

	cookies.set('safe_comments', previous + `\n${comment}`, {
		path: '/',
		sameSite: 'strict',
		httpOnly: true,
	});

	return redirect('/protected');
};
