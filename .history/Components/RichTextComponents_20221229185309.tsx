import Link from "next/link";
import Image from "next/image";
import urlFor from "../lib/urlFor";
export const RichTextComponents = {
  image: ({ value }: any) => {
    return (
      <div className="relative w-full h-96 m-10 mx-auto">
        <Image
          fill
          alt="blog post image"
          src={urlFor(value).url()}
          className=" object-contain"
        />
      </div>
    );
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),

    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),

    block: {
      h1: ({ children }: any) => (
        <h1 className="text-5xl py-10 font-medium">{children}</h1>
      ),

      h2: ({ children }: any) => (
        <h2 className="text-4xl py-10 font-medium">{children}</h2>
      ),

      h3: ({ children }: any) => (
        <h3 className="text-3xl py-10 font-medium">{children}</h3>
      ),

      h4: ({ children }: any) => (
        <h1 className="text-2xl py-10 font-medium">{children}</h1>
      ),

      blockquote: ({ children }: any) => (
        <blockquote className="border-l-[#e23e47] border-l-4 pl-5 py-5 my-5"></blockquote>
      ),
    },
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopner"
        : undefined;

      return (
        <Link
          className="underline dedcoration-[#e23e47] hover:decoration-white"
          rel={rel}
          href={value.href}
        >
          {children}
        </Link>
      );
    },
  },
};
