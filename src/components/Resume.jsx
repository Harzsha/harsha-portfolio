const Resume = () => {
    const experience = [
        {
            company: "HCL Software",
            role: "Senior Software Engineer I",
            period: "January 2025 – Present",
            location: "Bengaluru, Karnataka",
            highlights: [
                "Developing a full stack solution for the HCL Software Marketplace Platform using React, Angular, and Go (Golang).",
                "Building high-performance microservices, integrating CI/CD pipelines using Docker, Kubernetes, and GitHub Actions.",
                "Optimizing cloud infrastructure with Terraform and deploying services across AWS and GCP.",
                "Ensuring security and reliability of platform using IAM, OAuth, API Gateways, Prometheus, and Grafana.",
            ],
        },
        {
            company: "CGI",
            role: "Software Engineer",
            period: "September 2022 – January 2025",
            location: "Bengaluru, Karnataka",
            highlights: [
                "Developed responsive web applications using Angular 12/13/14/15 and TypeScript.",
                "Implemented dynamic UIs and integrated RESTful APIs for seamless user experience.",
                "Optimized performance, leading to a 20% increase in page load speed.",
                "Awarded Bronze for contributions to a critical project with tight deadlines.",
            ],
        },
        {
            company: "Bosch Global Software Technologies",
            role: "Senior Engineer",
            period: "June 2022 – August 2022",
            location: "Bengaluru, Karnataka",
            highlights: [
                "Worked on industrial automation projects with Three.js and Go Lang.",
                "Collaborated with product managers and backend teams for requirement analysis.",
            ],
        },
        {
            company: "Tata Consultancy Services",
            role: "System Engineer",
            period: "June 2019 – June 2022",
            location: "Kochi, Kerala",
            highlights: [
                "Led the UI team and worked on a core banking application.",
                "Optimized application performance and resolved 100+ defects.",
                "Worked extensively with Angular 6, Bootstrap, and TypeScript.",
            ],
        },
    ];

    return (
        <section id="resume" className="min-h-screen py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-100">
            <div className="max-w-4xl mx-auto animate-fade-in">
                <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12 animate-slide-up">Resume</h2>
                <ul className="space-y-10">
                    {experience.map((job, idx) => (
                        <li
                            key={idx}
                            className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-slide-fade"
                        >
                            <h3 className="text-xl font-semibold text-indigo-900 mb-2">{job.role} @ {job.company}</h3>
                            <p className="text-sm text-gray-600 mb-4">{job.period} • {job.location}</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                {job.highlights.map((point, index) => (
                                    <li key={index} className="text-lg">{point}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Resume;
