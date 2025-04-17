const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-gradient-to-br from-purple-100 to-indigo-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-indigo-800">About Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          I’m a Full Stack Developer with over 5 years of experience, specializing in Angular, React, TypeScript, and Go (Golang).
          I have extensive experience in building scalable, high-performance web applications and microservices with Docker, Kubernetes, and cloud technologies like GCP, AWS, and Azure.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          My skillset also includes CI/CD implementation, API integration, and UI/UX principles. I thrive in agile environments and always prioritize building user-centric solutions with high scalability and security.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-medium text-gray-600">
          <span className="bg-white p-3 rounded shadow">Angular (7-19)</span>
          <span className="bg-white p-3 rounded shadow">React JS</span>
          <span className="bg-white p-3 rounded shadow">Go (Golang)</span>
          <span className="bg-white p-3 rounded shadow">Docker & Kubernetes</span>
          <span className="bg-white p-3 rounded shadow">CI/CD & DevOps</span>
          <span className="bg-white p-3 rounded shadow">AWS, GCP, Azure</span>
        </div>
      </div>
    </section>
  );
};

export default About;
