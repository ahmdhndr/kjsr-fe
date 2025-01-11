import Link from "next/link";

import BrandLogo from "./brand-logo";
import InstagramIcon from "./icons/instagram";
import YoutubeIcon from "./icons/youtube";

export default function Footer() {
  return (
    <footer className="border-primary-100 container border-t py-4 font-sans text-primary">
      <div className="mx-auto grid grid-cols-12 items-start gap-4 md:grid-cols-3">
        <div className="col-span-full flex flex-col items-center gap-2 md:col-span-2 md:flex-row">
          <BrandLogo size={120} onFooter />
          <div>
            <h4 className="text-xl font-bold">Informasi Kontak:</h4>
            <p>
              Jl. Teuku Umar No.8, RT.1/RW.1, Gondangdia, Kec. Menteng, Kota
              Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350
            </p>
            <p>021-3909176</p>
          </div>
        </div>
        <div className="col-span-full mt-3 md:col-span-1 md:mt-0">
          <h4 className="text-xl font-bold">Ikuti kami di Media Sosial!</h4>
          <div className="mt-4 flex items-center gap-2">
            <Link
              href={"https://www.instagram.com/kjsrindonesia"}
              passHref
              legacyBehavior
            >
              <a className="w-7" target="_blank">
                <InstagramIcon />
              </a>
            </Link>
            <Link
              href={"https://youtube.com/@kjrindonesia4260"}
              passHref
              legacyBehavior
            >
              <a className="w-8" target="_blank">
                <YoutubeIcon />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 text-center">
        Copyright &copy; {new Date().getFullYear()} KJSR Indonesia
      </div>
    </footer>
  );
}
