import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  imageAlt: string;
  quote: string;
  rating: number;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const TestimonialSection = ({ testimonials }: TestimonialSectionProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-trust-builder/10 border border-trust-builder/20 rounded-full px-6 py-2 mb-6">
            <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" className="text-trust-builder" />
            <span className="text-sm font-semibold text-trust-builder">Developer Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Trusted by Builders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the developers and founders building the future on CryptoVault EVM
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-card hover:border-primary/30 transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} name="StarIcon" size={20} variant="solid" className="text-warning" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-muted flex-shrink-0">
                  <AppImage
                    src={testimonial.image}
                    alt={testimonial.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;