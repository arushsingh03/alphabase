import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  
  return (
    <header className="px-6 py-4 bg-emerald-800 border-b border-emerald-700 font-work-sans">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href=""
          className="flex items-center space-x-1 hover:opacity-90 transition-opacity"
        >
          <Image src="/logo.gif" alt="logo" width={60} height={50} />
          <p className="text-30-extrabold">
            ALPHA <span className="text-emerald-200 -ml-1">BASE</span>
          </p>
        </Link>

        <div className="flex items-center gap-6 text-emerald-100">
          {session && session?.user ? (
            <>
              <Link
                href="/startup/create"
                className="tag"
              >
                Create
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 transition-colors border border-emerald-500 text-white font-medium"
                >
                  Logout
                </button>
              </form>

              <Link
                href={`/user/${session?.id}`}
                className="flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 transition-colors border border-emerald-500 text-white"
              >
                <span className="font-medium">{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit" className="login">
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