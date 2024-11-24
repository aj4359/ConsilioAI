import React from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Plus, Edit, Trash } from 'lucide-react';
import axios from 'axios';

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
}

export function Posts() {
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () => axios.get('/api/posts').then(res => res.data),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => axios.delete(`/api/posts/${id}`),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Posts</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>New Post</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">Title</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">Slug</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">Created</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-slate-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((post) => (
              <tr key={post.id} className="border-b border-slate-200">
                <td className="px-6 py-4 text-sm text-slate-600">{post.title}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{post.slug}</td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-600 hover:text-indigo-600 mr-3">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button 
                    className="text-slate-600 hover:text-red-600"
                    onClick={() => deleteMutation.mutate(post.id)}
                  >
                    <Trash className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}