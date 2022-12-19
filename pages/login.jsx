import { useState } from 'react';
import { Login } from 'components/Login';
import { login } from 'services/auth';
import Cookies from 'js-cookie';
import * as constants from 'config/constants';
import router from 'next/router';
import { useAuth } from 'hooks/useAuth';

const initialState = { email: '', password: '' };

export default function LoginPage() {
  const [data, setData] = useState(() => initialState);
  const { login } = useAuth();
  const handleChange = event => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await login({ data });
  };

  return <Login data={data} onChange={handleChange} onSubmit={handleSubmit} />;
}
