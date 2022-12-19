import { createContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import router from 'next/router';
import { api } from 'services/api';
import * as constants from 'config/constants';
import * as authService from 'services/auth';
import { toast } from 'react-toastify';
import { Loading } from 'components/Loading';
import { Layout } from 'components/Layout';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useLocalStorage(constants.AUTH_KEY);

  const handleAuth = (token, error) => {
    if (error) {
      toast.error(error);
      return setError(error);
    }
    if (!token) {
      setToken({});
      setUser(null);
      return;
    }
    setUser(jwtDecode(token.access));
    api.setHeader(token.access);
    setToken(token);
  };

  const login = async ({ data, redirectTo = '/dashboard' }) => {
    const result = await authService.login(data);
    handleAuth(result.data?.token, result.error);
    router.push(redirectTo);
  };

  const signup = async ({ data, redirectTo = '/dashboard' }) => {
    const result = await auth.signup(data);
    handleAuth(result.data?.token, result.error);
    router.push(redirectTo);
  };

  const logout = ({ redirectTo = '/' }) => {
    handleAuth(null);
    router.push(redirectTo);
  };

  useEffect(() => {
    if (token?.access) {
      api.setHeader(token?.access);
      const user = jwtDecode(token?.access);
      setUser(user);
    }
    setLoading(false);
  }, [token?.access]);

  const value = { token, user, login, logout, signup, error };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <Layout>
          <Loading />
        </Layout>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
