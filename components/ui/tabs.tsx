"use client"

import { createContext, useContext, useState } from "react"
import { cn } from "../../lib/utils"

const TabsContext = createContext({})

export function Tabs({ defaultValue, value, onValueChange, children, className }: { defaultValue: string, value: string, onValueChange: (newValue: string) => void, children: React.ReactNode, className: string }) {
  const [selectedTab, setSelectedTab] = useState(value || defaultValue)

  const handleValueChange = (newValue: string) => {
    setSelectedTab(newValue)
    if (onValueChange) onValueChange(newValue)
  }

  return (
    <TabsContext.Provider value={{ value: selectedTab, onValueChange: handleValueChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ className, ...props }: { className: string, props: React.HTMLAttributes<HTMLDivElement> }) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className,
      )}
      {...props}
    />
  )
}

export function TabsTrigger({ className, value, ...props }: { className: string, value: string, props: React.HTMLAttributes<HTMLButtonElement> }) {
  const { value: selectedValue, onValueChange } = useContext(TabsContext) as { value: string, onValueChange: (newValue: string) => void }
  const isActive = selectedValue === value

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive && "bg-background text-foreground shadow-sm",
        className,
      )}
      onClick={() => onValueChange(value)}
      {...props}
    />
  )
}

export function TabsContent({ className, value, ...props }: { className: string, value: string, props: React.HTMLAttributes<HTMLDivElement> }) {
  const { value: selectedValue } = useContext(TabsContext) as { value: string }

  if (selectedValue !== value) return null

  return (
    <div
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    />
  )
}