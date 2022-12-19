import router from 'next/router';
import Cookies from 'js-cookie';
import { useCallback } from 'react';
import { getUserById } from 'services/user';

export default function DashboardPage() {
  const getUserData = useCallback(async id => {
    const user = await getUserById(id);
  }, []);

  const handleLogout = () => {
    Cookies.remove('access-token');
    Cookies.remove('refresh-token');
    router.push('/login');
  };

  return (
    <div>
      DashboardPage
      <button onClick={handleLogout} className="bg-red-400 text-white">
        Log out
      </button>
    </div>
  );
}
