import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Zap, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Rocket, 
  BookOpen,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#f9fafb]/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-black text-white p-1.5 rounded-lg transform -rotate-3">
              <Code2 size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">Aiken Dojo</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-black font-medium transition-colors">Features</a>
            <a href="#curriculum" className="text-gray-600 hover:text-black font-medium transition-colors">Learn</a>
            <a href="#community" className="text-gray-600 hover:text-black font-medium transition-colors">Community</a>
            <button className="bg-black text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
              Start Coding
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 p-4 space-y-4">
          <a href="#features" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#curriculum" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Learn</a>
          <a href="#community" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Community</a>
          <button className="w-full bg-black text-white px-5 py-3 rounded-lg font-medium">
            Start Coding
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
          <span className="marker-highlight">Zero Setup.</span> Pure Code.<br />
          Ship on Cardano <span className="text-gray-400 font-hand italic">fast.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Interactive exercises based on the <span className="font-semibold text-gray-800">Aiken Book</span>. 
          Learn each concept in context, then practice it instantly inside the Dojo.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <button className="w-full sm:w-auto px-8 py-4 bg-black text-white text-lg font-bold rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2">
            <Terminal size={20} />
            Start Coding Now
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 text-lg font-bold rounded-xl hover:border-gray-400 transition-colors flex items-center justify-center gap-2">
            View Documentation
          </button>
        </div>

        {/* Browser Mockup */}
        <div className="relative mx-auto max-w-5xl rounded-xl bg-gray-900 shadow-2xl overflow-hidden border border-gray-800 transform rotate-1 hover:rotate-0 transition-transform duration-500">
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 px-3 py-1 bg-gray-900 rounded text-xs text-gray-400 font-mono flex-1 text-center">
              aiken-dojo.io/playground
            </div>
          </div>
          <div className="flex h-[400px] md:h-[500px] text-left">
            {/* Sidebar */}
            <div className="w-16 md:w-64 bg-gray-900 border-r border-gray-800 p-4 hidden md:block">
              <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">Explorer</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-400 bg-blue-500/10 p-2 rounded">
                  <Code2 size={16} />
                  <span className="text-sm font-mono">validator.ak</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 p-2">
                  <Layers size={16} />
                  <span className="text-sm font-mono">types.ak</span>
                </div>
              </div>
            </div>
            
            {/* Code Area */}
            <div className="flex-1 p-6 font-mono text-sm overflow-auto bg-[#0d1117] text-gray-300">
              <div className="text-purple-400">use</div> <div className="inline text-white">aiken/transaction.{'{ScriptContext}'}</div>
              <br/><br/>
              <div className="text-gray-500">// Simplicity meets power.</div>
              <div className="text-pink-400">validator</div> {'{'}
              <br/>
              &nbsp;&nbsp;<div className="inline text-blue-400">fn</div> <div className="inline text-yellow-300">hello_world</div>(datum: <div className="inline text-green-400">Data</div>, redeemer: <div className="inline text-green-400">Data</div>, ctx: <div className="inline text-green-400">ScriptContext</div>) {'{' + ' '}
              <span className="text-gray-500">-&gt;</span> <div className="inline text-green-400">Bool</div> {'{'}
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<div className="inline text-gray-500">// Your logic here without Haskell headaches</div>
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<div className="inline text-purple-400">True</div>
              <br/>
              &nbsp;&nbsp;{'}'}
              <br/>
              {'}'}
            </div>

            {/* Visual Preview / Output */}
            <div className="w-1/3 bg-gray-800 border-l border-gray-700 p-4 hidden lg:block">
              <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">Live UTxO Visualizer</div>
              <div className="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-700">
                 <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-green-400">Input UTxO</span>
                    <span className="text-xs text-gray-500">120 ADA</span>
                 </div>
                 <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-3/4"></div>
                 </div>
              </div>
              <div className="flex justify-center my-2 text-gray-600">
                <ArrowRight size={16} className="rotate-90" />
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                 <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-blue-400">Validator Script</span>
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px]">PASS</span>
                 </div>
                 <div className="text-xs text-gray-400 font-mono">
                    <span className="text-gray-500">&gt; Mem: 12400 units</span><br/>
                    <span className="text-gray-500">&gt; CPU: 48020 units</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, colorClass }: { icon: any, title: string, description: string, colorClass: string }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${colorClass}`}>
      <Icon size={28} className="text-gray-900" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need to <span className="marker-highlight-blue">build & ship</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">We've stripped away the complexity so you can focus on logic, not configuration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Zap}
            title="Pure Functional Language"
            description="Write validators in a small, expressive syntax designed for Cardano. First-class functions, recursion, and custom types keep complex logic approachable."
            colorClass="bg-yellow-200"
          />
          <FeatureCard 
            icon={Code2}
            title="Strong Static Typing"
            description="Lean on powerful type inference to catch mistakes early. Aiken mirrors the guarantees described in the official language docs and keeps refactors safe."
            colorClass="bg-pink-200"
          />
          <FeatureCard 
            icon={Layers}
            title="Modern Dev Environment"
            description="Zero-config toolchain with friendly diagnostics, LSP support, formatter, and Monaco baked right into the browser—just like the official Playground."
            colorClass="bg-blue-200"
          />
          <FeatureCard 
            icon={Cpu}
            title="Cardano Tooling Kit"
            description="Unit tests, property tests, cost evaluation, and a Plutus interpreter are all part of the workflow so you can inspect UPLC behavior instantly."
            colorClass="bg-green-200"
          />
          <FeatureCard 
            icon={Rocket}
            title="Open Source Ecosystem"
            description="Aiken is written in Rust, Apache-2.0 licensed, and powered by 200+ contributors. Learn in the Dojo and take the same code to mainline repos."
            colorClass="bg-purple-200"
          />
          <FeatureCard 
            icon={BookOpen}
            title="Playground Ready"
            description="Every lesson mirrors the official Aiken Book. Practice, run, and iterate in-browser before exporting scripts to your preferred off-chain stack."
            colorClass="bg-orange-200"
          />
        </div>
      </div>
    </section>
  );
};

const CurriculumStep = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
  <div className="flex gap-6 relative">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg z-10">
        {number}
      </div>
      <div className="w-0.5 h-full bg-gray-200 absolute top-10 left-5 -z-0"></div>
    </div>
    <div className="pb-12">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  </div>
);

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-800 font-semibold text-sm mb-6">
              Learning Path
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              From <span className="italic font-hand text-5xl relative top-1">zero</span> to Validator.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We don't just give you an editor; we give you a roadmap. 
              Master Cardano development through our structured, interactive challenges.
            </p>
            
            <div className="mt-8">
               <CurriculumStep 
                 number="1" 
                 title="Hello World" 
                 desc="Understand the basics of Validators, Datum, and Redeemers in 5 minutes."
               />
               <CurriculumStep 
                 number="2" 
                 title="The Vesting Contract" 
                 desc="Build a time-locked vault. Learn about POSIX time and signature verification."
               />
               <CurriculumStep 
                 number="3" 
                 title="Minting Policies" 
                 desc="Create your own native assets and NFTs. Control supply and burning logic."
               />
               <div className="flex gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold text-lg z-10">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-400 mb-2">Marketplace Logic</h4>
                  <p className="text-gray-400">Coming soon...</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-dojo-accent-pink opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
             <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-lg">Challenge #2: Vesting</h3>
                   <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">In Progress</span>
                </div>
                <div className="space-y-4">
                   <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-600 line-through">Define Datum structure</span>
                   </div>
                   <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-600 line-through">Implement owner signature check</span>
                   </div>
                   <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 shrink-0 mt-0.5"></div>
                      <span className="text-gray-900 font-medium">Validate deadline has passed</span>
                   </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                   <button className="w-full py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors">
                      Resume Challenge
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Trust = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
           Empowering developers from
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-xl font-bold font-sans"><div className="w-6 h-6 bg-indigo-600 rounded-full"></div>Ethereum</div>
          <div className="flex items-center gap-2 text-xl font-bold font-sans"><div className="w-6 h-6 bg-purple-600 rounded-full"></div>Solana</div>
          <div className="flex items-center gap-2 text-xl font-bold font-sans"><div className="w-6 h-6 bg-orange-500 rounded-full"></div>Rust</div>
          <div className="flex items-center gap-2 text-xl font-bold font-sans"><div className="w-6 h-6 bg-blue-500 rounded-full"></div>Web2</div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white text-black p-1.5 rounded-lg transform -rotate-3">
                <Code2 size={24} />
              </div>
              <span className="font-bold text-2xl tracking-tight">Aiken Dojo</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              The easiest way to learn, build, and deploy smart contracts on Cardano. 
              Open source and built for the community.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Editor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Community</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cardano Stack Exchange</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aiken Dojo. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="font-sans text-gray-900 antialiased">
      <Navbar />
      <Hero />
      <Trust />
      <Features />
      <Curriculum />
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dojo-accent-yellow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Ready to <span className="bg-white px-2 italic transform -rotate-1 inline-block border-2 border-black rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">build</span> the future?
          </h2>
          <p className="text-xl text-gray-800 mb-10 max-w-2xl mx-auto">
            Join 10,000+ developers discovering the power of eUTxO without the headache.
            Start writing your first smart contract in seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-10 py-5 bg-black text-white text-xl font-bold rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
              Launch Dojo IDE
            </button>
             <button className="px-10 py-5 bg-white text-black border-2 border-black text-xl font-bold rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
              View on GitHub
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;