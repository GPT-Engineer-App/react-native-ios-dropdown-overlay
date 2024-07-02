import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-4 overflow-auto items-center justify-center bg-gray-100">
      <header className="w-full p-4 bg-blue-600 text-white text-center text-2xl font-bold">
        Stacked Dropdowns App
      </header>
      <Outlet />
      <footer className="w-full p-4 bg-blue-600 text-white text-center">
        &copy; 2023 Stacked Dropdowns App
      </footer>
    </main>
  );
};

export default Layout;