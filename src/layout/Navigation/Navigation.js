import React from "react";
import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/writing">Writing</Link>
      <Link href="/accessibility">Accessibility</Link>
      <Link href="/speaking">Speaking</Link>
      <Link href="/achievements">Achievements</Link>
    </nav>
  );
}

export default Navigation;
