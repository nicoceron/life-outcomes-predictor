import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-background rounded-lg p-6 border">
      <Quote className="h-8 w-8 text-primary/40 mb-4" />
      <p className="text-lg mb-6">{quote}</p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  )
}

