"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = Posts;
var react_1 = require("react");
var react_query_1 = require("@tanstack/react-query");
var lucide_react_1 = require("lucide-react");
var axios_1 = require("axios");
function Posts() {
    var _a = (0, react_query_1.useQuery)({
        queryKey: ['posts'],
        queryFn: function () { return axios_1.default.get('/api/posts').then(function (res) { return res.data; }); },
    }), posts = _a.data, isLoading = _a.isLoading;
    var deleteMutation = (0, react_query_1.useMutation)({
        mutationFn: function (id) { return axios_1.default.delete("/api/posts/".concat(id)); },
    });
    if (isLoading)
        return <div>Loading...</div>;
    return (<div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Posts</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <lucide_react_1.Plus className="h-5 w-5"/>
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
            {posts === null || posts === void 0 ? void 0 : posts.map(function (post) { return (<tr key={post.id} className="border-b border-slate-200">
                <td className="px-6 py-4 text-sm text-slate-600">{post.title}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{post.slug}</td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-600 hover:text-indigo-600 mr-3">
                    <lucide_react_1.Edit className="h-5 w-5"/>
                  </button>
                  <button className="text-slate-600 hover:text-red-600" onClick={function () { return deleteMutation.mutate(post.id); }}>
                    <lucide_react_1.Trash className="h-5 w-5"/>
                  </button>
                </td>
              </tr>); })}
          </tbody>
        </table>
      </div>
    </div>);
}
