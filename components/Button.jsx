import { Loading } from './Loading';

export const Button = ({ loading, type, label, icon, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <span className="mr-2">{loading ? <Loading className="w-5 h-5" /> : icon}</span>
      {label}
    </button>
  );
};
