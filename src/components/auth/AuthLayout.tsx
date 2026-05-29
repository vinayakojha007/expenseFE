import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({
  children,
}: Props) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      
      {/* LEFT SIDE */}
      <div className="hidden flex-col justify-between bg-black p-10 text-white lg:flex">
        
        {/* Top */}
        <div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl font-bold text-black">
            ET
          </div>

          <div className="mt-10">
            <h1 className="text-5xl font-bold leading-tight">
              Expense
              <br />
              Tracker
            </h1>

            <p className="mt-5 max-w-md text-zinc-400">
              Smart finance management platform
              for expenses, investments and budgeting.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="space-y-4">
          
          <div className="rounded-2xl border border-white/10 p-5">
            <p className="text-sm text-zinc-300">
              Track expenses with modern analytics
              and investment insights.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-5">
            <p className="text-sm text-zinc-300">
              Production-ready finance dashboard
              built using React + ShadCN.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center bg-zinc-50 p-6">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}