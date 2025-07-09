import * as React from "react";
import { cn } from "../../lib/util";

const gradientTextVariants = {
  cyan: "text-gradient-cyan",
  purple: "text-gradient-purple",
  pink: "text-gradient-pink",
  emerald: "text-gradient-emerald",
};

const Card = React.forwardRef(
  ({ className, isDarkMode = true, ...props }, ref) => {
    const baseClass = isDarkMode
      ? "bg-white backdrop-blur-md border border-white/10 text-white"
      : "bg-white border border-gray-200 text-gray-900";

    return (
      <div
        ref={ref}
        className={cn("rounded-xl shadow-md", baseClass, className)}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(
  ({ className, variant = "cyan", ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        gradientTextVariants[variant] || gradientTextVariants["cyan"],
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm opacity-80", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
