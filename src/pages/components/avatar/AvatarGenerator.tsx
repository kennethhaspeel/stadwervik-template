import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AvatarGenerator({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <Avatar>
        <AvatarFallback>
          {initials}
    </AvatarFallback>
    </Avatar>
  );
}