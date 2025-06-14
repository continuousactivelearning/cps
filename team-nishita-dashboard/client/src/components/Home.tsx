import { Globe, Lock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {

  const logged = Boolean(localStorage.getItem('token'));
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">


      <main className="grid flex-grow gap-12 items-center px-6 mt-16 md:grid-cols-2">

        <div>
          <h2 className="mb-6 text-5xl font-bold text-emerald-900">
            TODO
          </h2>
          <div className="flex space-x-4">
            <Link to='/login'>
              {/* <button className="py-3 px-6 text-white bg-emerald-600 rounded-full transition hover:bg-emerald-700"> */}
              {/*   {logged ? 'Dashboard' : 'Login'} */}
              {/* </button> */}
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-8 px-6 mt-16 text-center">
        <p className="text-emerald-800">
          © 2025.
        </p>
      </footer>
    </div>
  );
};

export default Home;
