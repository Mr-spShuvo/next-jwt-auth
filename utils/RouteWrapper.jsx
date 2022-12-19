import { useAuth } from 'hooks/useAuth';
import router from 'next/router';

export const RouteWrapper = ({ children }) => {
  const { token } = useAuth();

  if (!token?.access) {
    router.push('/login');
  }

  return children;
};
