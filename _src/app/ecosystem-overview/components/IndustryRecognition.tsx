import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Recognition {
  id: number;
  title: string;
  source: string;
  date: string;
  type: 'media' | 'award' | 'conference';
  image: string;
  imageAlt: string;
  link: string;
}

interface IndustryRecognitionProps {
  recognitions: Recognition[];
}

const IndustryRecognition = ({ recognitions }: IndustryRecognitionProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'media':
        return 'NewspaperIcon';
      case 'award':
        return 'TrophyIcon';
      case 'conference':
        return 'MicrophoneIcon';
      default:
        return 'StarIcon';
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'media':
        return 'bg-brand-primary/10 text-brand-primary border-brand-primary/30';
      case 'award':
        return 'bg-warning/10 text-warning border-warning/30';
      case 'conference':
        return 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/30';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-conversion-accent/10 border border-conversion-accent/20 rounded-full px-6 py-2 mb-6">
            <Icon name="TrophyIcon" size={20} variant="solid" className="text-conversion-accent" />
            <span className="text-sm font-semibold text-conversion-accent">Industry Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Awards &amp; Media Coverage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized by leading industry publications and organizations for innovation and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recognitions.map((recognition) => (
            <div
              key={recognition.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-card hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <AppImage
                  src={recognition.image}
                  alt={recognition.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border flex items-center space-x-1 ${getTypeBadge(recognition.type)}`}>
                  <Icon name={getTypeIcon(recognition.type) as any} size={14} variant="solid" />
                  <span>{recognition.type.charAt(0).toUpperCase() + recognition.type.slice(1)}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-headline font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {recognition.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span className="font-medium">{recognition.source}</span>
                  <span>{formatDate(recognition.date)}</span>
                </div>
                <button className="w-full py-2 bg-muted hover:bg-primary hover:text-primary-foreground text-foreground rounded-lg font-cta font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Read More</span>
                  <Icon name="ArrowTopRightOnSquareIcon" size={16} variant="outline" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryRecognition;