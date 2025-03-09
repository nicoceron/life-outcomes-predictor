import type React from "react"
import { Palette, Code, Sparkles, Search, FileText, BarChart, type LightbulbIcon as LucideProps } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const IconComponent = getIcon(icon)

  return (
    <div className="bg-background rounded-lg p-6 border transition-all hover:shadow-md">
      <div className="h-12 w-12 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
        <IconComponent className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function getIcon(name: string): React.ComponentType<LucideProps> {
  const icons: Record<string, React.ComponentType<LucideProps>> = {
    Palette,
    Code,
    Sparkles,
    Search,
    FileText,
    BarChart,
  }

  return icons[name] || Palette
}

