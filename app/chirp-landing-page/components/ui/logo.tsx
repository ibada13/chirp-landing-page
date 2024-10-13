import Link from "next/link";
export default function Logo() {
    return (
        <Link href="/chirp-landing-page">
        <p className="bg text-2xl text-blue-500 ">
            chirp.
        </p>
    </Link>
    );
 }