import { useAuth } from 'hooks/useAuth';
import router from 'next/router';

export const withAuth = Component => {
  const ProtectedComponent = props => {
    const { token } = useAuth();

    if (!token?.access) router.push('/login');
    return <Component {...props} />;
  };
  return ProtectedComponent;
};
