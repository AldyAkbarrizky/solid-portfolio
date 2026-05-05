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

export default function BentoCard({
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
        "overflow-hidden border-border/80 bg-card shadow-sm transition-all duration-200",
        hover && "hover:shadow-md hover:-translate-y-1",
        gradient &&
          "bg-gradient-to-br from-card via-card to-accent/60 dark:border-0 dark:from-purple-900/20 dark:to-blue-900/20",
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
