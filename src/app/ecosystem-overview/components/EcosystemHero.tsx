import Icon from '@/components/ui/AppIcon';

const EcosystemHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0e1a] via-[#0a0e27] to-[#1e293b] py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0066ff] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00d4aa] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-[#0066ff]/10 border border-[#0066ff]/20 rounded-full px-6 py-2 mb-6">
            <Icon name="CubeTransparentIcon" size={20} variant="solid" className="text-[#00d4aa]" />
            <span className="text-sm font-semibold text-[#00d4aa]">Thriving Ecosystem</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-[#ffffff] mb-6">
            Built by Developers,
            <span className="block text-[#00d4aa]">For the Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#8892b0] mb-8 leading-relaxed">
            Explore the comprehensive ecosystem of DApps, partnerships, and integrations powering the next generation of decentralized finance on CryptoVault EVM.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0066ff] hover:bg-[#0052cc] text-[#ffffff] rounded-lg font-cta font-bold text-lg transition-all duration-300 shadow-cta-[#0066ff] hover:shadow-cta-[#0066ff]-hover flex items-center justify-center space-x-2">
              <span>Explore Projects</span>
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#00d4aa] hover:bg-[#00d4aa]/10 text-[#00d4aa] rounded-lg font-cta font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Become a Partner</span>
              <Icon name="HandRaisedIcon" size={20} variant="outline" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemHero;