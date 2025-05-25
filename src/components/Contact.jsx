import { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from '../utils/firebase';

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setSuccess(false); // Reset success message on new input
    };

    const writeUserData = async (name, email, message) => {
        const messagesRef = ref(database, 'messages');
        await push(messagesRef, {
            username: name,
            email: email,
            message: message,
            timestamp: new Date().toISOString()
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await writeUserData(form.name, form.email, form.message);
            setSuccess(true);
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error sending message: ", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="min-h-screen py-20 px-6 bg-gradient-to-r from-indigo-100 to-purple-100">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-5xl font-extrabold text-indigo-800 text-center mb-6">Get in Touch</h2>
                <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                    Let’s connect and build something amazing together. Reach out to me via email or send me a message below.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800 mb-16">
                    {/* Contact Info */}
                    <div className="space-y-6 px-6">
                        <div className="flex items-start gap-3">
                            <div className="bg-indigo-200 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">@</div>
                            <p><strong>Email:</strong> harshagowtham30@gmail.com</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-indigo-200 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">in</div>
                            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/harshavardhan-p-21938620a" target="_blank" rel="noreferrer" className="text-indigo-600 underline">/harshavardhan-p</a></p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-indigo-200 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">GH</div>
                            <p><strong>GitHub:</strong> <a href="https://github.com/Harzsha" target="_blank" rel="noreferrer" className="text-indigo-600 underline">/Harzsha</a></p>
                        </div>

                        <div>
                            <p className="font-semibold">Languages:</p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Tamil (Full Professional)</li>
                                <li>English (Full Professional)</li>
                                <li>Malayalam (Professional Working)</li>
                                <li>Hindi (Professional Working)</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold">Certifications:</p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>JavaScript Introduction</li>
                                <li>AWS DevOps Engineer Professional</li>
                                <li>HTML5 with JavaScript & CSS3</li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6 animate-fade-in">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows="5"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            ></textarea>
                        </div>

                        {success && <p className="text-green-600 text-sm font-medium">Message sent successfully!</p>}

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>

                {/* Resume Download */}
                <div className="mt-8 flex justify-center">
                    <a
                        href="/HarshavardhanP_FullStackDeveloper.pdf"
                        download
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl text-lg font-medium transition-all shadow-lg"
                    >
                        Download My Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
