import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BentoCardProps {
  title?: string;
  description?: string;
  footer?: ReactNode;
  className?: string;
  contentClassName?: string;
  children?: ReactNode;
  gradient?: boolean;
  hover?: boolean;
}

export default function BentooCard({
  title,
  description,
  footer,
  className,
  contentClassName,
  children,
  gradient = false,
  hover = true,
}: BentoCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-200",
        hover && "hover:shadow-lg hover:-translate-y-1",
        gradient &&
          "border-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm",
        className
      )}
    >
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className={cn("", contentClassName)}>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
