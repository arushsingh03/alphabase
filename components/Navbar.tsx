import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-6 py-4 bg-slate-900 border-b border-slate-700 font-work-sans">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href=""
          className="flex items-center space-x-1 hover:opacity-90 transition-opacity"
        >
          <Image src="/logo.gif" alt="logo" width={55} height={30} />
          <p className="text-2xl font-title text-white">
            Alpha <span className="text-slate-400 -ml-1">Base</span>
          </p>
        </Link>

        <div className="flex items-center gap-6 text-slate-300">
          {session && session?.user ? (
            <>
              <Link
                href="/startup/create"
                className="hover:text-white transition-colors"
              >
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
                >
                  Logout
                </button>
              </form>

              <Link
                href={`/user/${session?.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button
                type="submit"
                className="px-6 py-2 rounded-md bg-white text-slate-900 hover:bg-slate-100 transition-colors font-medium"
              >
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
