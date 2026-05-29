import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterForm() {
  return (
    <Card className="border-0 shadow-xl">
      <CardContent className="p-8">
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Start Your Journey to  Expenz – Fast, punchy, and tech-focused
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Track your expenses, own your future. Sign up today and make every rupee count!
          </p>
        </div>

        <form className="space-y-5">

                        <div className="space-y-2">
            <Label>Username</Label>

            <Input
              type="text"
              placeholder="Enter your username"
              className="h-11"
            />
          </div>
          
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
            Register
          </Button>
        </form>

          
          <Link
            to="/login"
            className="font-medium text-black"
          >
            back to login
          </Link>
        
      </CardContent>
    </Card>
  );
}