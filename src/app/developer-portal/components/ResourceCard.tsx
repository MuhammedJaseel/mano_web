import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ResourceCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  category: string;
  readTime: string;
  link: string;
}

export default function ResourceCard({
  title,
  description,
  image,
  alt,
  category,
  readTime,
  link,
}: ResourceCardProps) {
  return (
    <a
      href={link}
      className="group bg-[#ffffff] rounded-xl overflow-hidden border border-[#e2e8f0] hover:border-[#0066ff] transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="text-xs font-medium px-3 py-1 bg-[#0066ff] text-[#ffffff] rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-headline font-bold text-[#0f172a] mb-2 group-hover:text-[#0066ff] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-[#475569] mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-[#475569]">
            <Icon name="ClockIcon" size={16} variant="outline" />
            <span className="text-xs">{readTime}</span>
          </div>
          <div className="flex items-center text-[#0066ff] text-sm font-medium">
            <span>Read more</span>
            <Icon
              name="ArrowRightIcon"
              size={16}
              variant="outline"
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </a>
  );
}