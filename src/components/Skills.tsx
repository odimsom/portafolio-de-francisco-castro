
const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85  },
    { name: 'TypeScript', level: 80 },
    { name: 'Next.js', level: 75 },
    { name: 'GraphQL', level: 70 },
    { name: 'Python', level: 65 },
]

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 text-white">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-lg">
                            <div className="flex justify-between mb-2">
                                <span className="text-white">{skill.name}</span>
                                <span className="text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}