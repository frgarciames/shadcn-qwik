/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import type { ComponentProps } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-qwik";

import { cn } from "@/lib/utils";
import { Slot } from "@builder.io/qwik";

const Accordion = AccordionPrimitive.Root;

const ReactAccordion = qwikify$<ComponentProps<typeof AccordionPrimitive.Item>>(
  AccordionPrimitive.Item
);
const ReactAccordionTrigger = qwikify$<
  ComponentProps<typeof AccordionPrimitive.Trigger>
>(AccordionPrimitive.Trigger);
const ReactAccordionContent = qwikify$<
  ComponentProps<typeof AccordionPrimitive.Content>
>(AccordionPrimitive.Content);
const ReactAccordionHeader = qwikify$<
  ComponentProps<typeof AccordionPrimitive.Header>
>(AccordionPrimitive.Header);

const AccordionItem = ({ className = "", ...props }) => (
  <ReactAccordion
    className={cn(
      "border-b border-b-slate-200 dark:border-b-slate-700",
      className
    )}
    {...props}
  />
);

const AccordionTrigger = ({ className, children, ...props }: any) => (
  <ReactAccordionHeader className="flex">
    <ReactAccordionTrigger
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      <Slot />
      <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
    </ReactAccordionTrigger>
  </ReactAccordionHeader>
);

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden text-sm transition-all",
      className
    )}
    {...props}
  >
    <div className="pt-0 pb-4">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
