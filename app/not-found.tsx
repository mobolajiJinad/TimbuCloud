import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[80vh] px-[3%] flex-col items-center justify-center">
      <h2>Coming Soon</h2>
      <p>Check out other pages till then</p>
      <Link
        href="/"
        className="text-dark-cyan  font-medium underline text-lg mt-4 cursor-pointer"
      >
        Return Home
      </Link>
    </div>
  );
}
