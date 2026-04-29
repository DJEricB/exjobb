export const POST = async ({ 
  request, cookies 
}: { 
  request: Request; 
  cookies: any 
}) => {
  const form = await request.formData();
  if (!cookies.get('lab_session')) 
    return new Response('Inte inloggad', { status: 401 });
  return new Response(`Sårbar åtgärd utförd: ${form.get('amount')}`, { status: 200 });
};
