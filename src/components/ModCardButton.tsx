import { Button } from "@/components/ui/button"

interface ModCardButtonProps {
  Wiki: string;
}

export default function ModCardButton({ Wiki }: ModCardButtonProps) {
  return (
    <Button variant="outline" onClick={() => window.open(Wiki, "_blank")} >Wiki</Button>
  )
}