import { AuthProvider } from 'contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, ...props }) {
  return (
    <AuthProvider>
      <Component {...props} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthProvider>
  );
}
