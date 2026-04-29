export const POST = async ({ cookies, redirect }) => {
  cookies.set('lab_session', 'demo-user', { path: '/' });
  return redirect('/vulnerable');
};
