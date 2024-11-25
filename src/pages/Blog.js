"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = Blog;
var react_1 = require("react");
var react_query_1 = require("@tanstack/react-query");
var framer_motion_1 = require("framer-motion");
var axios_1 = require("axios");
function Blog() {
    var _a = (0, react_query_1.useQuery)({
        queryKey: ['posts'],
        queryFn: function () { return axios_1.default.get('/api/posts').then(function (res) { return res.data; }); },
    }), posts = _a.data, isLoading = _a.isLoading;
    return (<div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-6">
        <framer_motion_1.motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Financial Insights & Updates
        </framer_motion_1.motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts === null || posts === void 0 ? void 0 : posts.map(function (post) { return (<framer_motion_1.motion.article key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -5 }} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-800 mb-3">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                  <a href={"/blog/".concat(post.slug)} className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Read more →
                  </a>
                </div>
              </div>
            </framer_motion_1.motion.article>); })}
        </div>
      </div>
    </div>);
}
