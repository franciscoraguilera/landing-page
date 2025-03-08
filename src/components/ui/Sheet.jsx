"use client"

import React, { createContext, useContext, useState } from "react"
import { X } from "lucide-react"
import { cn } from "../../utils/cn"

const SheetContext = createContext({})

export function Sheet({ children, open, onOpenChange }) {
  const [isOpen, setIsOpen] = useState(open || false)

  const handleOpenChange = (open) => {
    setIsOpen(open)
    if (onOpenChange) onOpenChange(open)
  }

  return (
    <SheetContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>{children}</SheetContext.Provider>
  )
}

export function SheetTrigger({ children, asChild }) {
  const { onOpenChange } = useContext(SheetContext)
  const Comp = asChild ? (
    React.cloneElement(children, {
      onClick: (e) => {
        e.preventDefault()
        onOpenChange(true)
        if (children.props.onClick) children.props.onClick(e)
      },
    })
  ) : (
    <button onClick={() => onOpenChange(true)}>{children}</button>
  )

  return Comp
}

export function SheetContent({ children, side = "right", className }) {
  const { open, onOpenChange } = useContext(SheetContext)

  if (!open) return null

  const sideStyles = {
    top: "inset-x-0 top-0 border-b animate-in slide-in-from-top",
    bottom: "inset-x-0 bottom-0 border-t animate-in slide-in-from-bottom",
    left: "inset-y-0 left-0 h-full w-3/4 border-r animate-in slide-in-from-left sm:max-w-sm",
    right: "inset-y-0 right-0 h-full w-3/4 border-l animate-in slide-in-from-right sm:max-w-sm",
  }

  return (
    <>
      <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => onOpenChange(false)} />
      <div
        className={cn(
          "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out",
          sideStyles[side],
          className,
        )}
      >
        {children}
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          onClick={() => onOpenChange(false)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>
  )
}

