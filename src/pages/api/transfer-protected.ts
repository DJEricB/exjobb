export const POST = async ({ request, cookies }) => {
  const form = await request.formData();
  if (!cookies.get('lab_session')) return new Response('Inte inloggad', { status: 401 });
  if (form.get('csrf') !== cookies.get('csrf_token')?.value) return new Response('Blockerad: CSRF-token saknas eller är fel', { status: 403 });
  return new Response(`Skyddad åtgärd utförd: ${form.get('amount')}`, { status: 200 });
};
