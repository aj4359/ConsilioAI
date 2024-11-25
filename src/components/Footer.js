"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = Footer;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var react_router_dom_1 = require("react-router-dom");
function Footer() {
    return (<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <lucide_react_1.Brain className="h-8 w-8 text-cyan-400"/>
              <span className="text-xl font-bold text-white">Consilio-AI</span>
            </div>
            <p className="text-sm">
              Your AI-powered financial partner, helping you make smarter decisions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400">
                <lucide_react_1.Twitter className="h-5 w-5"/>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400">
                <lucide_react_1.Github className="h-5 w-5"/>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400">
                <lucide_react_1.Linkedin className="h-5 w-5"/>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><react_router_dom_1.Link to="/features" className="hover:text-cyan-400">Features</react_router_dom_1.Link></li>
              <li><react_router_dom_1.Link to="/pricing" className="hover:text-cyan-400">Pricing</react_router_dom_1.Link></li>
              <li><react_router_dom_1.Link to="/demo" className="hover:text-cyan-400">Demo</react_router_dom_1.Link></li>
              <li><react_router_dom_1.Link to="/api" className="hover:text-cyan-400">API</react_router_dom_1.Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><react_router_dom_1.Link to="/about" className="hover:text-cyan-400">About</react_router_dom_1.Link></li>
              <li><react_router_dom_1.Link to="/blog" className="hover:text-cyan-400">Blog</react_router_dom_1.Link></li>
              <li><react_router_dom_1.Link to="/careers" className="hover:text-cyan-400">Careers</react_router_dom_1.Link></li>
              <li><react_router_dom_1.Link to="/contact" className="hover:text-cyan-400">Contact</react_router_dom_1.Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><react_router_dom_1.Link to="/privacy" className="hover:text-cyan-400">Privacy Policy</react_router_dom_1.Link></li>
              <li><react_router_dom_1.Link to="/terms" className="hover:text-cyan-400">Terms of Service</react_router_dom_1.Link></li>
              <li><react_router_dom_1.Link to="/security" className="hover:text-cyan-400">Security</react_router_dom_1.Link></li>
              <li><react_router_dom_1.Link to="/compliance" className="hover:text-cyan-400">Compliance</react_router_dom_1.Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Consilio-AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);
}
