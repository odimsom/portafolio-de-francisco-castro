import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const ArticleCard: React.FC = () => (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">The simplest example is kafka + golang</h3>
        <p className="text-gray-400 mb-4">This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.</p>
        <button className="bg-white text-black px-4 py-2 rounded-full flex items-center">
            Read more
            <ArrowRight className="ml-2 w-4 h-4" />
        </button>
    </div>
);

const Articles: React.FC = () => (
    <section id="articles" className="py-10 md:py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10">Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </div>
        <div className="flex justify-center mt-8">
            <div className="flex flex-col items-center space-y-2">
                <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">1</button>
                <button className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">2</button>
                <button className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                    <ChevronDown className="w-4 h-4" />
                </button>
            </div>
        </div>
    </section>
);

export default Articles;