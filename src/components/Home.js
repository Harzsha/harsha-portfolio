const Home = () => {
  return (
    <div className="relative isolate px-6 pt-32 pb-20 h-screen flex items-center justify-center text-center bg-white overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-x-0 top-0 -z-10 blur-3xl">
        <div
          className="w-[72rem] h-[72rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 rotate-[30deg]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>

      <div className="max-w-2xl z-10">
        <img
          src="/harsha-logo.jpeg" // Replace with your image path in public folder
          alt="Harshavardhan P"
          className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg object-cover"
        />
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Harshavardhan P</h1>
        <p className="text-lg text-gray-600 mb-8">
          Full Stack Developer | Expert in Angular, React, RxJS, and CI/CD. Crafting pixel-perfect UI & scalable code.
        </p>
        <div className="flex justify-center items-center gap-6">
          <a
            href="#about"
            className="bg-indigo-600 text-white px-5 py-3 rounded-md text-sm font-medium hover:bg-indigo-500"
          >
            About
          </a>
          <a
            href="/HarshaP_Resume.pdf" // Replace with actual path to your PDF
            download
            rel="noopener noreferrer"
            className="text-sm font-semibold text-gray-900 hover:underline"
          >
            Download Resume →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
