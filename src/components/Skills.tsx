import React from 'react'

const Skills: React.FC = () => (
  <section className="py-10 grid grid-cols-2 gap-8">
    <div>
      <h2 className="text-2xl font-bold mb-4">Front-end</h2>
      <div className="bg-gray-800 rounded-lg p-4">
        <p className="text-gray-400">JavaScript / React / Vue / Redux Toolkit / Next.js / Nuxt.js / GraphQL / Apollo</p>
      </div>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-4">Back-end</h2>
      <div className="bg-gray-800 rounded-lg p-4">
        <p className="text-gray-400">Go / Gin / Echo / Fiber / Kafka / RabbitMQ / PostgreSQL / MongoDB / Redis</p>
      </div>
    </div>
  </section>
)

export default Skills