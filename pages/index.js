import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href="/about">
        <a>about</a>
      </Link>
      <div>Welcome to portfolio</div>
    </div>
  );
}
