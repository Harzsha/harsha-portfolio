const skills = [
  { name: "Angular (7–19)", percent: 95, color: "from-purple-500 to-indigo-500" },
  { name: "React JS", percent: 90, color: "from-blue-500 to-teal-400" },
  { name: "TypeScript", percent: 92, color: "from-cyan-500 to-blue-500" },
  { name: "RxJS", percent: 88, color: "from-pink-500 to-purple-400" },
  { name: "NgRx", percent: 85, color: "from-indigo-500 to-purple-500" },
  { name: "HTML5", percent: 98, color: "from-orange-400 to-red-500" },
  { name: "CSS3 / SCSS", percent: 95, color: "from-blue-400 to-cyan-400" },
  { name: "Figma", percent: 75, color: "from-pink-400 to-pink-600" },
  { name: "Go (Golang)", percent: 80, color: "from-teal-400 to-blue-600" },
  { name: "Docker & Kubernetes", percent: 85, color: "from-blue-700 to-blue-400" },
  { name: "CI/CD & DevOps", percent: 90, color: "from-gray-700 to-gray-400" },
  { name: "AWS / GCP / Azure", percent: 85, color: "from-yellow-500 to-blue-600" },
  { name: "Azure DevOps", percent: 80, color: "from-blue-500 to-gray-500" },
  { name: "AWS Lambda", percent: 78, color: "from-yellow-400 to-yellow-600" },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-gradient-to-br from-purple-100 to-indigo-100">
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        <h2 className="text-5xl font-bold mb-10 text-indigo-800 animate-slide-up">About Me</h2>

        <p className="text-lg text-gray-700 mb-6 text-justify animate-slide-fade">
          I’m a Full Stack Developer with 5+ years of experience, focused on Angular, React, TypeScript, Go, and cloud-native technologies.
          I love building scalable apps, working with microservices, and designing clean, performant frontends.
        </p>

        <p className="text-lg text-gray-700 mb-12 text-justify animate-slide-fade">
          From clean UI/UX to cloud infra on AWS, GCP, and Azure—I'm passionate about delivering complete solutions.
          I blend DevOps, APIs, and frontend magic to build impactful products.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 text-left animate-slide-up">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition-all duration-500"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-800">{skill.name}</span>
                <span className="text-sm font-bold text-indigo-600">{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} animate-slide-up`}
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
