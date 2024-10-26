
import Image from 'next/image'

const articles = [
    {
        title: 'Mastering React Hooks',
        excerpt: 'Learn how to effectively use React Hooks to manage state and side effects in your applications.',
        imageUrl: '/path-to-article-image-1.jpg',
        link: '#'
    },
    {
        title: 'Building Scalable APIs with Node.js',
        excerpt: 'Explore best practices for creating robust and scalable backend services using Node.js and Express.',
        imageUrl: '/path-to-article-image-2.jpg',
        link: '#'
    },
    {
        title: 'TypeScript: Why and How',
        excerpt: 'Discover the benefits of using TypeScript in your projects and how to get started with it.',
        imageUrl: '/path-to-article-image-3.jpg',
        link: '#'
    }
]

export default function Articles() {
    return (
        <section id="articles" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 text-white">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={article.imageUrl}
                                alt={article.title}
                                width={400}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-white">{article.title}</h3>
                                <p className="text-gray-400 mb-4">{article.excerpt}</p>
                                <a
                                    href={article.link}
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}