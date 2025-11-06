import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <Badge variant="outline" className={cn("font-normal", className)}>
      {children}
    </Badge>
  );
}

