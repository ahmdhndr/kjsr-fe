import React from "react";

interface Props {
  heading?: string;
  subHeading?: string;
  children?: React.ReactNode;
}

export default function PlaceholderComponent({
  heading = "Heading",
  subHeading = "Subheading",
  children,
}: Props) {
  return (
    <div className="static md:absolute md:bottom-0 md:left-0 md:right-0 md:top-0">
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center">
        <div className="prose mx-auto dark:prose-invert">
          <div className="flex flex-col items-center text-center">
            <h1 className="my-0 self-center text-5xl font-extrabold uppercase tracking-tight text-primary md:text-7xl">
              {heading}
            </h1>
            <div className="self-center">
              <h2 className="my-0 text-xl font-semibold uppercase text-destructive md:text-2xl">
                {subHeading}
              </h2>
              <div className="h-0.5 w-full bg-destructive" />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
