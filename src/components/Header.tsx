import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="max-w-[1160px] p-4 mx-auto bg-white flex items-start">
      <Link href="/">
        <div style={{ width: "75%" }}>
          <Image
            width={1160}
            height={196}
            src="https://mgkt.org.bd/wp-content/uploads/2024/02/FFRAWT-01-2.png"
            alt="Logo"
          />
        </div>
      </Link>

      <button className="mt-4">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            d="M3 17h18a1 1 0 0 1 .117 1.993L21 19H3a1 1 0 0 1-.117-1.993L3 17h18H3Zm0-6 18-.002a1 1 0 0 1 .117 1.993l-.117.007L3 13a1 1 0 0 1-.117-1.993L3 11l18-.002L3 11Zm0-6h18a1 1 0 0 1 .117 1.993L21 7H3a1 1 0 0 1-.117-1.993L3 5h18H3Z"
            fill="#212121"
          />
        </svg>
      </button>
    </header>
  );
};
