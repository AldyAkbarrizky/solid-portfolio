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
        "overflow-hidden rounded-2xl border-border/70 bg-card/82 shadow-sm backdrop-blur transition-all duration-300",
        hover && "hover:-translate-y-1 hover:shadow-[0_22px_70px_rgb(0_0_0/0.12)]",
        gradient &&
          "bg-[linear-gradient(135deg,color-mix(in_oklch,var(--card)_92%,white),color-mix(in_oklch,var(--accent)_24%,var(--card)))] dark:bg-[linear-gradient(135deg,color-mix(in_oklch,var(--card)_90%,white_4%),color-mix(in_oklch,var(--accent)_30%,var(--card)))]",
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
