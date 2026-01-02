import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Partnership {
  id: number;
  partner: string;
  type: string;
  date: string;
  description: string;
  logo: string;
  logoAlt: string;
}

interface PartnershipTimelineProps {
  partnerships: Partnership[];
}

const PartnershipTimeline = ({ partnerships }: PartnershipTimelineProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getTypeIcon = (type: string) => {
    if (type.includes('Exchange')) return 'BuildingLibraryIcon';
    if (type.includes('Wallet')) return 'WalletIcon';
    if (type.includes('Oracle')) return 'CircleStackIcon';
    if (type.includes('Security')) return 'ShieldCheckIcon';
    if (type.includes('Indexing')) return 'ChartBarIcon';
    return 'HandshakeIcon';
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-secondary/10 border border-brand-secondary/20 rounded-full px-6 py-2 mb-6">
            <Icon name="LinkIcon" size={20} variant="solid" className="text-brand-secondary" />
            <span className="text-sm font-semibold text-brand-secondary">Strategic Partnerships</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Partnership Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building the future together with industry-leading partners and integrations
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-secondary to-primary transform -translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {partnerships.map((partnership, index) => (
                <div
                  key={partnership.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-card border-4 border-primary rounded-full items-center justify-center shadow-cta-primary z-10">
                    <Icon name={getTypeIcon(partnership.type) as any} size={20} variant="solid" className="text-primary" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-card hover:border-primary/30 transition-all duration-300">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <AppImage
                            src={partnership.logo}
                            alt={partnership.logoAlt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                          <h3 className="text-xl font-headline font-bold text-foreground mb-1">
                            {partnership.partner}
                          </h3>
                          <p className="text-sm text-primary font-semibold">{partnership.type}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {partnership.description}
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Icon name="CalendarIcon" size={14} variant="outline" />
                        <span>{formatDate(partnership.date)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-primary hover:bg-cta-blue text-primary-foreground rounded-lg font-cta font-bold text-lg transition-all duration-300 shadow-cta-primary hover:shadow-cta-primary-hover inline-flex items-center space-x-2">
            <span>Become a Partner</span>
            <Icon name="ArrowRightIcon" size={20} variant="outline" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipTimeline;