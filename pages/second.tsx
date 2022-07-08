import Link from "next/link";

export default function Second({}) {
  return (
    <div style={{ padding: 16 }}>
      <h1>Second</h1>

      <ul>
        <li>
          <Link href="/">Root page</Link>
        </li>
      </ul>
    </div>
  );
}
