import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[80px_1fr_60px] min-h-screen bg-gradient-to-br from-purple-900 via-black to-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 border-b border-purple-800/30">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Launchpad Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            SoonPad
          </span>
        </div>
        <nav className="hidden sm:flex items-center gap-8">
          <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
          <a href="#how-it-works" className="hover:text-purple-400 transition-colors">How it Works</a>
          <button className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-500 transition-colors">
            Connect Wallet
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center px-4 py-16 sm:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
            Launch Your Token on Solana
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            The most trusted IDO platform for Solana projects. Fair launches, locked liquidity, and instant trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-purple-600 rounded-full hover:bg-purple-500 transition-colors">
              Apply for IDO
            </button>
            <button className="px-8 py-3 border border-purple-600 rounded-full hover:bg-purple-600/20 transition-colors">
              View Projects
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-800/30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">$150M+</div>
            <div className="text-gray-400">Total Raised</div>
          </div>
          <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-800/30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-400">Projects Launched</div>
          </div>
          <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-800/30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">100K+</div>
            <div className="text-gray-400">Community Members</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-center items-center border-t border-purple-800/30 text-sm text-gray-400">
        <div className="flex gap-6">
          <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Documentation</a>
        </div>
      </footer>
    </div>
  );
}
