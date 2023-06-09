"use client"

import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"

export default function SignOutButton() {
  return (
    <Button onClick={() => signOut({ callbackUrl: "/" })}>
      <GitHubLogoIcon className="mr-2 h-4 w-4" /> Sign Out
    </Button>
  )
}
