import { useState } from 'react';
import { Login } from 'components/Login';
import { useAuth } from 'hooks/useAuth';

const initialState = { email: '', password: '' };

export default function LoginPage() {
  const [data, setData] = useState(() => initialState);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleChange = event => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    await login({ data });
    setLoading(false);
  };

  return <Login loading={loading} data={data} onChange={handleChange} onSubmit={handleSubmit} />;
}
