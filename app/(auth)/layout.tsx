import { Briefcase } from "lucide-react";
import Link from "next/link";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm space-y-4">
        <div className="w-full flex items-center justify-center">
          <Link
            href={"/"}
            className="text-2xl font-bold flex items-center gap-x-2"
          >
            <Briefcase />
            <p>
              Job<span className="text-muted-foreground">DB.</span>
            </p>
          </Link>
        </div>
        {children}
      </div>
    </section>
  );
};
export default AuthLayout;
