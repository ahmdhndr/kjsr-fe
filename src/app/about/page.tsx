import HeartAnimation from "@/components/heart-animation";

export default function AboutPage() {
  return (
    <div className="mx-auto flex h-full w-full items-center justify-center">
      <div className="prose mx-auto dark:prose-invert">
        <div className="relative">
          <HeartAnimation />
        </div>
        <div className="flex flex-col items-center text-center">
          <h1 className="my-0 text-5xl font-extrabold uppercase tracking-tight text-primary md:text-7xl">
            Coming soon
          </h1>
          <h2 className="my-0 self-end text-xl font-semibold uppercase text-destructive md:text-2xl">
            Under Construction
          </h2>
          <div className="h-0.5 w-full bg-destructive" />
          <p className="w-full max-w-96 text-balance text-sm tracking-normal md:text-base">
            Our website is under development, lots of ideas are already in our
            heads! We are preparing something amazing and exciting for you.
          </p>
        </div>
      </div>
    </div>
  );
}
