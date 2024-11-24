import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import axios from 'axios';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  createdAt: string;
}

export function Blog() {
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () => axios.get('/api/posts').then(res => res.data),
  });

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-slate-800 mb-12 text-center"
        >
          Financial Insights & Updates
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-800 mb-3">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}