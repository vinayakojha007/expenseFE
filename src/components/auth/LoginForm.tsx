import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <Card className="border-0 shadow-xl">
      <CardContent className="p-8">
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Welcome Back
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Login to continue managing your finances.
          </p>
        </div>

        <form className="space-y-5">
          
          <div className="space-y-2">
            <Label>Email</Label>

            <Input
              type="email"
              placeholder="Enter your email"
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label>Password</Label>

            <Input
              type="password"
              placeholder="Enter password"
              className="h-11"
            />
          </div>

          <Button className="h-11 w-full bg-black text-white hover:bg-zinc-800">
            Login
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Don't have an account?{" "}
          
          <Link
            to="/register"
            className="font-medium text-black"
          >
            Create account
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}