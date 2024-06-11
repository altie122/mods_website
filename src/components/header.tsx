import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

export default function Header() {
  const handleClick = (url: string) => {
    window.location.href = url;
  };
  return (
    <header className="bg-secondary text-secondary-foreground h-16 flex items-center p-5 justify-center">
      <Button variant="outline" onClick={() => handleClick("https://www.altie122.xyz")} size='lg'>Altie122</Button>
      <ModeToggle />
    </header>
  );
}