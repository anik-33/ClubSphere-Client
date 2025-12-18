import { Outlet } from 'react-router';

const LoginLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500">
      <div className="max-w-11/12 mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT */}
        <div className="hidden md:flex flex-col justify-center px-10 text-white">
          <h1 className="text-4xl font-bold mb-4">ClubSphere</h1>
          <p className="mb-6 text-lg">
            Connect with clubs. Build communities. Create impact.
          </p>

          <ul className="space-y-3 text-sm">
            <li>✔ Discover amazing clubs</li>
            <li>✔ Manage events easily</li>
            <li>✔ Grow your network</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center px-4">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default LoginLayout;
