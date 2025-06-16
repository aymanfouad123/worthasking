"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  // Show loading while checking session
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center bg-worthgreen-muted h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-worthgreen"></div>
      </div>
    );
  }

  // Don't render dashboard if not authenticated
  if (status === "unauthenticated") {
    return null;
  }

  return (
    <div className="bg-worthgreen-muted h-full p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-8">
            <img
              src={session?.user?.image}
              alt={session?.user?.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h1 className="text-3xl font-medium text-worthgreen-dark">
                Welcome back, {session?.user?.name}!
              </h1>
              <p className="text-gray-600">
                Ready to ask some thoughtful questions?
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-worthgreen-muted p-6 rounded-xl">
              <h3 className="font-semibold text-worthgreen-dark mb-2">
                Questions Asked
              </h3>
              <p className="text-2xl font-bold text-worthgreen">0</p>
            </div>
            <div className="bg-worthgreen-muted p-6 rounded-xl">
              <h3 className="font-semibold text-worthgreen-dark mb-2">
                Creators Supported
              </h3>
              <p className="text-2xl font-bold text-worthgreen">0</p>
            </div>
            <div className="bg-worthgreen-muted p-6 rounded-xl">
              <h3 className="font-semibold text-worthgreen-dark mb-2">
                Total Spent
              </h3>
              <p className="text-2xl font-bold text-worthgreen">$0</p>
            </div>
          </div>

          <div className="mt-8">
            <button className="bg-worthgreen text-white px-6 py-3 rounded-lg font-medium hover:bg-worthgreen-dark transition">
              Ask Your First Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
