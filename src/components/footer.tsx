import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center py-5">
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="p-1 rounded-md ">
          <img
            src="/blklight-light.svg"
            className=" !max-w-none mx-auto invert dark:invert-0 w-16 h-16"
            alt="Ultimate Mercer Logo"
          />
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Blklight
        </div>
      </div>
      <nav className="flex gap-6 mb-6">
        <Link
          href="#"
          className="text-sm text-dark dark:text-light  transition-colors hover:underline"
        >
          Sobre
        </Link>
        <Link
          href="#"
          className="text-sm text-dark dark:text-light  transition-colors hover:underline"
        >
          Contato
        </Link>
      </nav>
    </footer>
  );
};
