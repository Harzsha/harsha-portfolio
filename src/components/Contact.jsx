const Contact = () => {
    return (
        <section id="contact" className="min-h-screen py-20 px-6 bg-gradient-to-r from-indigo-100 to-purple-100">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-indigo-800 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Let’s connect and build something amazing together. You can reach me via email or LinkedIn below.
                </p>
                <div className="flex flex-col gap-4 items-center text-gray-800 text-md">
                    <p><strong>Email:</strong> harshagowtham30@gmail.com</p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/harshavardhan-p-21938620a" rel="noreferrer" target="_blank" className="text-indigo-600 underline">linkedin.com/in/harshavardhan-p-21938620a</a></p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/Harzsha/" rel="noreferrer" target="_blank" className="text-indigo-600 underline">github.com/HarshaP</a></p>
                </div>
                <div className="mt-6">
                    <p><strong>Languages:</strong> Tamil (Full Professional), English (Full Professional), Malayalam (Professional Working), Hindi (Professional Working)</p>
                    <p><strong>Certifications:</strong> JavaScript Introduction, AWS DevOps Engineer Professional, HTML5 with JavaScript & CSS3</p>
                </div>

                <div className="mt-6">
                    <a href="/HarshaP_Resume.pdf" // Replace with actual path to your PDF
                        download className="text-indigo-600 underline">
                        Download My Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact; 
