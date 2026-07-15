import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image 
        src="/logo.png" 
        alt="WebSeva Logo" 
        width={300} 
        height={80} 
        className="h-8 w-auto"
        style={{ width: "auto", height: "32px" }}
        priority
      />
    </Link>
  );
}
