import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/libs/utils';

const textAreaVariants = cva('flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50');

type TextAreaProps = React.ComponentPropsWithRef<'textarea'>;

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextAreaBase({ className, ...props }, ref) {
  return <textarea className={cn(textAreaVariants(), className)} ref={ref} {...props} />;
});