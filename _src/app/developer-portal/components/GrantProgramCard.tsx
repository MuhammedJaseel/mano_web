import Icon from '@/components/ui/AppIcon';

interface GrantProgramCardProps {
  title: string;
  amount: string;
  description: string;
  requirements: string[];
  deadline: string;
  applicants: number;
}

export default function GrantProgramCard({
  title,
  amount,
  description,
  requirements,
  deadline,
  applicants,
}: GrantProgramCardProps) {
  return (
    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-headline font-bold text-foreground mb-2">
            {title}
          </h3>
          <div className="flex items-center space-x-2">
            <Icon name="CurrencyDollarIcon" size={20} variant="solid" className="text-success" />
            <span className="text-2xl font-bold text-success">{amount}</span>
          </div>
        </div>
        <div className="bg-primary/10 px-3 py-1 rounded-full">
          <span className="text-xs font-medium text-primary">Open</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-headline font-bold text-foreground mb-2">
          Requirements
        </h4>
        <ul className="space-y-1">
          {requirements.map((req, index) => (
            <li key={index} className="flex items-start space-x-2">
              <Icon
                name="CheckCircleIcon"
                size={16}
                variant="solid"
                className="text-success mt-0.5 flex-shrink-0"
              />
              <span className="text-sm text-foreground">{req}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="CalendarIcon" size={14} variant="outline" />
            <span>Deadline: {deadline}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="UsersIcon" size={14} variant="outline" />
            <span>{applicants} applicants</span>
          </div>
        </div>
      </div>
      <button className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-cta font-semibold hover:bg-cta-blue transition-all duration-300">
        Apply Now
      </button>
    </div>
  );
}