import React from 'react';

interface SkillSectionProps {
    title: string;
    skills: string[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills }) => (
    <div className="mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">{title}</h3>
        <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <li key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-sm">{skill}</li>
            ))}
        </ul>
    </div>
);

const Skills: React.FC = () => (
    <section id="skills" className="py-10 md:py-20">
        <h2 className="text-3xl font-bold mb-6 md:mb-10">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <SkillSection
                title="Front-end"
                skills={["TypeScript", "React", "Vue", "Vuex", "Redux Toolkit", "NextJs", "Nuxt", "Jest", "GraphQL", "React Native", "Puppeteer", "Enzyme"]}
            />
            <SkillSection
                title="Styles"
                skills={["SCSS", "SASS", "PostCSS", "Ant.d", "MUI", "Material UI"]}
            />
            <SkillSection
                title="Back-end"
                skills={["Golang", "Gin", "GORM", "PostgreSQL", "MySQL", "MongoDB", "gRPC", "Redis", "Kafka", "Node", "Nest", "TypeORM", "Microservices"]}
            />
            <SkillSection
                title="DevOps"
                skills={["Nginx", "Brotli", "Docker", "CI/CD", "k8s", "Bash"]}
            />
        </div>
    </section>
);

export default Skills;