export const POST = async ({ cookies, redirect }: { cookies: any; redirect: any }) => {
  cookies.set('lab_session', 'demo-user', { path: '/' });
  return redirect('/vulnerable');
};
