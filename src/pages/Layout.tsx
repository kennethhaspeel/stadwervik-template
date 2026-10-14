import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className="flex h-screen flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="flex w-full min-h-0 flex-1 flex-col px-4 pb-20 sm:px-6 lg:px-8">
          <main className="flex min-h-0 flex-1 flex-col">
            <Outlet />
          </main>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Layout;
