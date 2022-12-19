import { useState } from 'react';
import { Login } from 'components/Login';
import { login } from 'services/auth';
import Cookies from 'js-cookie';
import * as constants from 'config/constants';
import router from 'next/router';

const initialState = { email: '', password: '' };

export default function LoginPage() {
  const [data, setData] = useState(() => initialState);
  const handleChange = event => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const {
      data: { token }
    } = await login(data);
    Cookies.set('access-token', token.access);
    Cookies.set('refresh-token', token.refresh);
    router.push('/dashboard');
  };

  return <Login data={data} onChange={handleChange} onSubmit={handleSubmit} />;
}
