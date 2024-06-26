/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EoqvZcShpIc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="mx-4 flex w-full max-w-md flex-col rounded-lg border border-input bg-card p-6 shadow-lg sm:mx-0">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p className="text-muted-foreground">Sign up or sign in to get started.</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="flex flex-col gap-2">
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <Button variant="outline" className="w-full">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}