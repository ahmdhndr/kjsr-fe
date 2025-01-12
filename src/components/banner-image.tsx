import Image from "next/image";

import { blurDataURL } from "@/data/blur-data-image-url";

export default function BannerImage() {
  return (
    <div className="grid grid-cols-7 gap-2">
      {/* Row 1 */}
      <div className="aspect-square overflow-hidden rounded-md"></div>
      <div className="aspect-square overflow-hidden rounded-md">
        <Image
          src={"/images/banner/banner-3.JPG"}
          alt="Logo"
          width={80}
          height={80}
          quality={80}
          className="h-full object-cover object-center"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-md">
        <Image
          src={"/images/banner/banner-4.JPG"}
          alt="Logo"
          width={80}
          height={80}
          quality={80}
          className="h-full object-cover object-center"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-md"></div>
      <div className="aspect-square overflow-hidden rounded-md">
        <Image
          src={"/images/banner/banner-1.JPG"}
          alt="Logo"
          width={80}
          height={80}
          quality={80}
          className="h-full object-cover object-center"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-md">
        <Image
          src={"/images/banner/banner-6.JPG"}
          alt="Logo"
          width={80}
          height={80}
          quality={80}
          className="h-full object-cover object-center"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-md"></div>

      {/* Row 2 */}
      <div className="aspect-square overflow-hidden rounded-md">
        <Image
          src={"/images/banner/banner-7.JPG"}
          alt="Logo"
          width={80}
          height={80}
          quality={80}
          className="h-full object-cover object-center"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
      <div className="col-span-5 row-span-3 aspect-auto overflow-hidden rounded-md bg-primary">
        <Image
          src={"/images/banner/banner-5.JPG"}
          alt="Banner 1"
          width={1280}
          height={720}
          quality={80}
          className="h-full object-cover object-center"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-md">
        <Image
          src={"/images/banner/banner-8.JPG"}
          alt="Logo"
          width={80}
          height={80}
          quality={80}
          className="h-full object-cover object-center"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>

      {/* Row 3 */}
      <div className="aspect-square overflow-hidden rounded-md">
        <Image
          src={"/images/banner/banner-9.JPG"}
          alt="Logo"
          width={80}
          height={80}
          quality={80}
          className="h-full object-cover object-center"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>

      {/* Row 4 */}
      <div className="aspect-square overflow-hidden rounded-md">
        <Image
          src={"/images/banner/banner-10.JPG"}
          alt="Logo"
          width={80}
          height={80}
          quality={80}
          className="h-full object-cover object-center"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-md"></div>

      {/* Row 5 */}
      <div className="aspect-square overflow-hidden rounded-md"></div>
      <div className="aspect-square overflow-hidden rounded-md"></div>
      <div className="aspect-square overflow-hidden rounded-md"></div>
      <div className="aspect-square overflow-hidden rounded-md">
        <Image
          src={"/images/banner/banner-11.JPG"}
          alt="Logo"
          width={80}
          height={80}
          quality={80}
          className="h-full object-cover object-center"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-md">
        <Image
          src={"/images/banner/banner-12.JPG"}
          alt="Logo"
          width={80}
          height={80}
          quality={80}
          className="h-full object-cover object-center"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-md">
        <Image
          src={"/images/banner/banner-13.JPG"}
          alt="Logo"
          width={80}
          height={80}
          quality={80}
          className="h-full object-cover object-center"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-md"></div>
      <div className="aspect-square overflow-hidden rounded-md"></div>

      {/* Row 6 */}
      <div className="aspect-square overflow-hidden rounded-md"></div>
      <div className="aspect-square overflow-hidden rounded-md"></div>
      <div className="aspect-square overflow-hidden rounded-md"></div>
      <div className="aspect-square overflow-hidden rounded-md">
        <Image
          src={"/images/banner/banner-14.JPG"}
          alt="Logo"
          width={80}
          height={80}
          quality={80}
          className="h-full object-cover object-center"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-md"></div>
      <div className="aspect-square overflow-hidden rounded-md"></div>
      <div className="aspect-square overflow-hidden rounded-md"></div>
    </div>
  );
}
