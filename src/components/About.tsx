
import Image from 'next/image'

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <Image
                            src="/path-to-your-photo.jpg"
                            alt="Francisco Castro"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-10">
                        <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
                        <p className="text-gray-300 mb-4">
                            I'm a passionate Full-Stack Developer with a strong focus on creating efficient and scalable web applications. With years of experience in both front-end and back-end technologies, I strive to deliver high-quality solutions that meet and exceed client expectations.
                        </p>
                        <p className="text-gray-300 mb-4">
                            My expertise includes React, Node.js, and TypeScript, among other modern web technologies. I'm always eager to learn and adapt to new challenges in the ever-evolving world of web development.
                        </p>
                        <a
                            href="/path-to-your-resume.pdf"
                            className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}