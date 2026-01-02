import Icon from '@/components/ui/AppIcon';

interface DocItem {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface DocumentationSectionProps {
  title: string;
  items: DocItem[];
}

export default function DocumentationSection({
  title,
  items,
}: DocumentationSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-headline font-bold text-[#0f172a] mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="group bg-[#ffffff] rounded-xl p-6 border border-[#e2e8f0] hover:border-[#0066ff] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="flex items-center space-x-3 mb-3">
              <Icon
                name={item.icon as any}
                size={24}
                variant="outline"
                className="text-[#0066ff]"
              />
              <h3 className="text-lg font-headline font-bold text-[#0f172a] group-hover:text-[#0066ff] transition-colors duration-300">
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-[#475569]">{item.description}</p>
            <div className="mt-4 flex items-center text-[#0066ff] text-sm font-medium">
              <span>Learn more</span>
              <Icon
                name="ArrowRightIcon"
                size={16}
                variant="outline"
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}