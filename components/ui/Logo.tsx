import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  height?: number;
  href?: string;
}

export default function Logo({
  className = "",
  height = 44,
  href = "/",
}: LogoProps) {
  const image = (
    <Image
      src="/images/logo.png"
      alt="Fetan Advertising"
      width={280}
      height={100}
      className={`w-auto h-auto object-contain ${className}`}
      priority
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-block shrink-0">
        {image}
      </Link>
    );
  }

  return image;
}
