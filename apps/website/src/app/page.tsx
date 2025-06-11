import { Terminal, Code, Zap, Shield, Database, Globe } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">Boilerplate CLI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#docs" className="text-gray-300 hover:text-white transition-colors">Docs</a>
            <a href="#examples" className="text-gray-300 hover:text-white transition-colors">Examples</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Generate Backend APIs
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Fast</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A powerful CLI tool to scaffold backend API boilerplates with customizable architecture, 
            tech stack, and features. Get from zero to production-ready in minutes.
          </p>
          
          {/* Installation Command */}
          <div className="bg-slate-800 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Install globally</span>
              <button className="text-purple-400 hover:text-purple-300 text-sm">Copy</button>
            </div>
            <code className="text-green-400 font-mono text-lg">npm install -g boilerplate-cli</code>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View on GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to build modern backend APIs with best practices built-in
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <Code className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Multiple Architectures</h3>
            <p className="text-gray-300">Choose from MVC, Clean Architecture, or Hexagonal patterns</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <Zap className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-300">Generate production-ready APIs in seconds, not hours</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <Shield className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
            <p className="text-gray-300">Built-in JWT auth, rate limiting, and input validation</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <Database className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Database Ready</h3>
            <p className="text-gray-300">Support for Mongoose, Prisma, and more ORMs</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <Globe className="h-12 w-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Framework Agnostic</h3>
            <p className="text-gray-300">Express, Fastify, and more frameworks supported</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <Terminal className="h-12 w-12 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">CLI Powered</h3>
            <p className="text-gray-300">Interactive prompts and extensible commands</p>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Quick Start</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Install</h3>
              <div className="bg-slate-800 rounded p-3">
                <code className="text-green-400 text-sm">npm i -g boilerplate-cli</code>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Create</h3>
              <div className="bg-slate-800 rounded p-3">
                <code className="text-green-400 text-sm">boilerplate-cli create</code>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Deploy</h3>
              <div className="bg-slate-800 rounded p-3">
                <code className="text-green-400 text-sm">npm run dev</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-slate-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Terminal className="h-6 w-6 text-purple-400" />
            <span className="text-white font-semibold">Boilerplate CLI</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">NPM</a>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400">
          <p>&copy; 2024 Boilerplate CLI. MIT License.</p>
        </div>
      </footer>
    </main>
  )
}