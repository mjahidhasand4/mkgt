import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="max-w-[1160px] my-8 mx-auto grid grid-cols-3 gap-8">
      <div>
        <img
          src="https://mgkt.org.bd/wp-content/uploads/2024/01/cropped-WEB-11111-01-scaled-1-removebg-preview.png"
          alt=""
        />

        <p className="mt-4">
          "Preserving history, honoring heroes, and inspiring unity. Join us in
          celebrating the legacy of Bangladesh's freedom fighters. Together, we
          write the chapters of our nation's pride."
        </p>
      </div>

      <div>
        <h2 className="text-[#222] font-bold text-[16px] uppercase h-10 border-b-[3px] border-[#d8d8d8] relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-[90px] after:h-[2px] after:bg-[#dd3333]">
          Useful Links
        </h2>

        <nav className="flex flex-col gap-2">
          <Link href="/">About Us</Link>
          <Link href="/">Management Team</Link>
          <Link href="/">Contact Us</Link>
          <Link href="/">Gallery</Link>
          <Link href="/">Notice</Link>
        </nav>
      </div>

      <div>
        <h2 className="text-[#222] font-bold text-[16px] uppercase h-10 border-b-[3px] border-[#d8d8d8] relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-[90px] after:h-[2px] after:bg-[#dd3333]">
          Contact Us
        </h2>

        <div className="mt-4">
          <p className="grid grid-cols-[0.2fr_1fr] items-center gap-3">
            <strong>Address</strong>
            <span>
              House # 334, Road # 23, Mohakhali DOHS, Dhaka, Bangladesh.
            </span>
          </p>

          <p className="grid grid-cols-[0.2fr_1fr] items-center gap-3">
            <strong>Phone</strong>
            <span>+8801610254116</span>
          </p>

          <p className="grid grid-cols-[0.2fr_1fr] items-center gap-3">
            <strong>Email</strong>
            <span>info@mgkt.org</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
