

const experiences = [
    {
        company: 'Tech Innovators Inc.',
        position: 'Senior Full-Stack Developer',
        period: 'Jan 2020 - Present',
        description: 'Led development of multiple high-traffic web applications using React and Node.js. Implemented CI/CD pipelines and mentored junior developers.'
    },
    {
        company: 'WebSolutions Co.',
        position: 'Full-Stack Developer',
        period: 'Mar 2017 - Dec 2019',
        description: 'Developed and maintained various client projects using MERN stack. Collaborated with design team to implement responsive and accessible user interfaces.'
    },
    {
        company: 'StartUp Ventures',
        position: 'Junior Developer',
        period: 'Jun 2015 - Feb 2017',
        description: 'Assisted in the development of a SaaS platform. Gained experience in agile methodologies and version control systems.'
    }
]

export default function WorkExperience() {
    return (
        <section id="experience" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 text-white">Work Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-white mb-2">{exp.position}</h3>
                            <p className="text-blue-400 mb-2">{exp.company}</p>
                            <p className="text-gray-400 mb-4">{exp.period}</p>
                            <p className="text-gray-300">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}