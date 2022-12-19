import { useAuth } from 'hooks/useAuth';
import { useState, useEffect } from 'react';
import { Loading } from './Loading';
import * as userService from 'services/user';

const initialState = {
  avatar: 'https://source.unsplash.com/150x150/?portrait?3',
  name: 'User',
  email: 'domain@gmail.com'
};

export const ProfileCard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(() => initialState);
  const { user, logout } = useAuth();

  useEffect(() => {
    userService
      .getUserById(user?._id)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = event => {
    event.preventDefault();
    logout({});
  };
  if (loading) return <Loading />;
  return (
    <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800">
      <img
        src={data.avatar}
        alt=""
        className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y divide-gray-300">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">{data.name}</h2>
          <p className="text-center text-xs sm:text-base text-gray-600">{data.email}</p>
        </div>
      </div>
      <button
        onClick={handleLogout}
        type="button"
        className="px-8 py-3 font-semibold rounded-full bg-red-500 text-gray-100"
      >
        Logout
      </button>
    </div>
  );
};
