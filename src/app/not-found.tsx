import Link from "next/link";

import PlaceholderComponent from "@/components/placeholder-component";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PlaceholderComponent heading="404" subHeading="Page Not Found">
      <p className="w-full max-w-96 text-balance text-sm tracking-normal text-primary md:text-base">
        The page you are looking for is not found. It could be that you entered
        the wrong URL or the page you are looking for has changed.
      </p>
      <Link href={"/"}>
        <Button>Take me home</Button>
      </Link>
    </PlaceholderComponent>
  );
}
