"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Register;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var framer_motion_1 = require("framer-motion");
var react_router_dom_1 = require("react-router-dom");
var lucide_react_1 = require("lucide-react");
function Register() {
    var _this = this;
    var _a = react_1.default.useState(false), showPassword = _a[0], setShowPassword = _a[1];
    var _b = react_1.default.useState(false), showConfirmPassword = _b[0], setShowConfirmPassword = _b[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _c = (0, react_hook_form_1.useForm)(), register = _c.register, handleSubmit = _c.handleSubmit, watch = _c.watch, _d = _c.formState, errors = _d.errors, isSubmitting = _d.isSubmitting;
    var password = watch('password', '');
    var passwordRequirements = [
        { label: 'At least 8 characters', test: function (pass) { return pass.length >= 8; } },
        { label: 'Contains a number', test: function (pass) { return /\d/.test(pass); } },
        { label: 'Contains an uppercase letter', test: function (pass) { return /[A-Z]/.test(pass); } },
        { label: 'Contains a special character', test: function (pass) { return /[!@#$%^&*]/.test(pass); } }
    ];
    var onSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                // Here you would typically make an API call to register the user
                console.log('Registration data:', data);
                navigate('/login');
            }
            catch (error) {
                console.error('Registration failed:', error);
            }
            return [2 /*return*/];
        });
    }); };
    return (<div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4 py-12">
      <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md w-full">
        <div className="text-center mb-8">
          <lucide_react_1.Brain className="h-12 w-12 text-cyan-400 mx-auto mb-4"/>
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-slate-400">Join Consilio-AI and start your financial journey</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>
              <input {...register('name', { required: 'Name is required' })} type="text" className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400" placeholder="John Doe"/>
              {errors.name && (<p className="mt-1 text-sm text-red-400">{errors.name.message}</p>)}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <input {...register('email', {
        required: 'Email is required',
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
        }
    })} type="email" className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400" placeholder="you@example.com"/>
              {errors.email && (<p className="mt-1 text-sm text-red-400">{errors.email.message}</p>)}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input {...register('password', {
        required: 'Password is required',
        minLength: {
            value: 8,
            message: 'Password must be at least 8 characters'
        }
    })} type={showPassword ? 'text' : 'password'} className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400" placeholder="••••••••"/>
                <button type="button" onClick={function () { return setShowPassword(!showPassword); }} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300">
                  {showPassword ? <lucide_react_1.EyeOff className="h-5 w-5"/> : <lucide_react_1.Eye className="h-5 w-5"/>}
                </button>
              </div>
              {errors.password && (<p className="mt-1 text-sm text-red-400">{errors.password.message}</p>)}
            </div>

            {/* Confirm Password Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input {...register('confirmPassword', {
        validate: function (value) { return value === password || 'Passwords do not match'; }
    })} type={showConfirmPassword ? 'text' : 'password'} className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400" placeholder="••••••••"/>
                <button type="button" onClick={function () { return setShowConfirmPassword(!showConfirmPassword); }} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300">
                  {showConfirmPassword ? <lucide_react_1.EyeOff className="h-5 w-5"/> : <lucide_react_1.Eye className="h-5 w-5"/>}
                </button>
              </div>
              {errors.confirmPassword && (<p className="mt-1 text-sm text-red-400">{errors.confirmPassword.message}</p>)}
            </div>

            {/* Password Requirements */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-slate-300 mb-2">Password Requirements</h3>
              <div className="space-y-2">
                {passwordRequirements.map(function (req, index) { return (<div key={index} className="flex items-center text-sm">
                    {req.test(password) ? (<lucide_react_1.Check className="h-4 w-4 text-green-400 mr-2"/>) : (<lucide_react_1.X className="h-4 w-4 text-slate-400 mr-2"/>)}
                    <span className={req.test(password) ? 'text-green-400' : 'text-slate-400'}>
                      {req.label}
                    </span>
                  </div>); })}
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="mb-6">
              <label className="flex items-center">
                <input {...register('acceptTerms', {
        required: 'You must accept the terms and conditions'
    })} type="checkbox" className="rounded border-slate-600 text-cyan-400 focus:ring-cyan-400 bg-slate-700/50"/>
                <span className="ml-2 text-sm text-slate-300">
                  I accept the{' '}
                  <react_router_dom_1.Link to="/terms" className="text-cyan-400 hover:text-cyan-300">
                    terms and conditions
                  </react_router_dom_1.Link>
                </span>
              </label>
              {errors.acceptTerms && (<p className="mt-1 text-sm text-red-400">{errors.acceptTerms.message}</p>)}
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white py-2 px-4 rounded-lg hover:from-cyan-400 hover:to-indigo-400 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="mt-8 text-center text-slate-400">
          Already have an account?{' '}
          <react_router_dom_1.Link to="/login" className="text-cyan-400 hover:text-cyan-300">
            Sign in
          </react_router_dom_1.Link>
        </p>
      </framer_motion_1.motion.div>
    </div>);
}
