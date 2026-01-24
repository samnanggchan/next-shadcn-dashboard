import { redirect } from 'next/navigation';

const isAuthenticated = false; // Replace with actual authentication logic

export default async function Dashboard() {
  if (!isAuthenticated) {
    redirect('/oauth2/authorization/itp-admin-bff');
  }
  else {
    redirect('/dashboard/overview');
  }
}
