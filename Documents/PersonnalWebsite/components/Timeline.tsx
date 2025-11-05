import { Badge } from "@/components/ui/badge";

interface TimelineItem {
  role: string;
  company: string;
  year: string;
  highlights?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-8" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-4 md:gap-8">
            <div className="relative z-10 flex shrink-0 items-center justify-center">
              <div className="h-4 w-4 rounded-full border-2 border-background bg-primary" />
            </div>
            <div className="flex-1 pb-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.company}
                  </p>
                </div>
                <Badge variant="outline">{item.year}</Badge>
              </div>
              {item.highlights && item.highlights.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm leading-relaxed text-muted-foreground">
                      • {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

