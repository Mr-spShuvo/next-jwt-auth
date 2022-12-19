export const Layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-neutral-100">
      <div className="bg-white rounded-md border p-10">{children}</div>
    </div>
  );
};
