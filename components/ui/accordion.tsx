"use client"
import { cn } from "@/lib/utils";
import { createContext, useContext, useState, Children } from 'react';
import { AnimatePresence, MotionProps, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
type AccordionType = unknown & MotionProps & React.ComponentPropsWithoutRef<"div"> & {
   activeClassName?: string
}

type AccordionContextType = {
   isActive: boolean;
   index: number;
   handleOnChangeIndex: (index: number) => void
}

type AccordionWrapper = {
   children: React.ReactNode;
   multiple?: boolean;
   defaultIndex?: number | number[];
   collapseAll?: () => void;
}

const AccordionContext = createContext({})
export const useAccordion = () => useContext(AccordionContext) as AccordionContextType

const Accordion = ({ children, multiple, defaultIndex }: AccordionWrapper) => {
   const [activeIndex, setActiveIndex] = useState<number | number[]>(
      multiple
         ? defaultIndex !== undefined
            ? [...defaultIndex as number[]]
            : []
         : defaultIndex !== undefined
            ? defaultIndex
            : -1
   )


   const handleOnChangeIndex = (index: number) => {
      setActiveIndex((currentActiveIndex) => {
         if (!multiple) {
            return index === activeIndex ? -1 : index;
         }
         if (Array.isArray(currentActiveIndex)) {
            if (currentActiveIndex.includes(index)) {
               return currentActiveIndex.filter((i) => i !== index)
            }
            return [...currentActiveIndex, index]
         }

         return [index];
      })
   }

   return Children.map(children, (child, index) => {
      const isActive =
         multiple && Array.isArray(activeIndex)
            ? activeIndex.includes(index)
            : activeIndex === index;

      return (
         <AccordionContext.Provider value={{ isActive, index, handleOnChangeIndex }}>
            {child}
         </AccordionContext.Provider>
      )
   })
}


const AccordionItem = ({ className, children, ...props }: AccordionType) => {
   return <div className={cn("border", className)} {...props} >{children}</div>
}

const AccordionHeader = ({ children, className, activeClassName, ...props }: AccordionType) => {
   const { isActive, index, handleOnChangeIndex } = useAccordion()

   return (
      <motion.div
         onClick={() => handleOnChangeIndex(index)}
         className={cn("flex flex-1 items-center justify-between font-medium cursor-pointer", isActive && activeClassName, className)} {...props}>
         {children}
         <ChevronDown className={`shrink-0 ${!isActive ? "rotate-180" : "-rotate-0"} transition-transform`} />
      </motion.div>
   )
}

const AccordionPanel = (
   {
      children,
      className
   }: {
      children: React.ReactNode,
      className?: string
   }) => {
   const { isActive } = useAccordion();

   return (
      <AnimatePresence initial={false}>
         {isActive && (
            <motion.div
               key="content"
               initial="collapsed"
               animate="open"
               exit="collapsed"
               variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 }
               }}
               transition={{ type: "spring", duration: 0.4, bounce: 0 }}
               className={cn("overflow-hidden", className)}
            >
               {children}
            </motion.div>
         )}
      </AnimatePresence>
   )
}

export {
   Accordion,
   AccordionItem,
   AccordionHeader,
   AccordionPanel,
}

