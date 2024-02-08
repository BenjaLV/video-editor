import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "autoprefixerinline-flex autoprefixeritems-center autoprefixerjustify-center autoprefixerwhitespace-nowrap autoprefixerrounded-md autoprefixertext-sm autoprefixerfont-medium autoprefixerring-offset-white autoprefixertransition-colors focus-visible:autoprefixeroutline-none focus-visible:autoprefixerring-2 focus-visible:autoprefixerring-slate-950 focus-visible:autoprefixerring-offset-2 disabled:autoprefixerpointer-events-none disabled:autoprefixeropacity-50 dark:autoprefixerring-offset-slate-950 dark:focus-visible:autoprefixerring-slate-300",
  {
    variants: {
      variant: {
        default: "autoprefixerbg-slate-900 autoprefixertext-slate-50 hover:autoprefixerbg-slate-900/90 dark:autoprefixerbg-slate-50 dark:autoprefixertext-slate-900 dark:hover:autoprefixerbg-slate-50/90",
        destructive:
          "autoprefixerbg-red-500 autoprefixertext-slate-50 hover:autoprefixerbg-red-500/90 dark:autoprefixerbg-red-900 dark:autoprefixertext-slate-50 dark:hover:autoprefixerbg-red-900/90",
        outline:
          "autoprefixerborder autoprefixerborder-slate-200 autoprefixerbg-white hover:autoprefixerbg-slate-100 hover:autoprefixertext-slate-900 dark:autoprefixerborder-slate-800 dark:autoprefixerbg-slate-950 dark:hover:autoprefixerbg-slate-800 dark:hover:autoprefixertext-slate-50",
        secondary:
          "autoprefixerbg-slate-100 autoprefixertext-slate-900 hover:autoprefixerbg-slate-100/80 dark:autoprefixerbg-slate-800 dark:autoprefixertext-slate-50 dark:hover:autoprefixerbg-slate-800/80",
        ghost: "hover:autoprefixerbg-slate-100 hover:autoprefixertext-slate-900 dark:hover:autoprefixerbg-slate-800 dark:hover:autoprefixertext-slate-50",
        link: "autoprefixertext-slate-900 autoprefixerunderline-offset-4 hover:autoprefixerunderline dark:autoprefixertext-slate-50",
      },
      size: {
        default: "autoprefixerh-10 autoprefixerpx-4 autoprefixerpy-2",
        sm: "autoprefixerh-9 autoprefixerrounded-md autoprefixerpx-3",
        lg: "autoprefixerh-11 autoprefixerrounded-md autoprefixerpx-8",
        icon: "autoprefixerh-10 autoprefixerw-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
