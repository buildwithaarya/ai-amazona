import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        // Find user by email
        const user = await prisma.user.findUnique({ where: { email: credentials.email as string } });
        if (!user || typeof user.password !== "string" || typeof credentials.password !== "string") return null;
        // Compare password using bcrypt
        const isValid = await compare(credentials.password, user.password);
        if (!isValid) return null;
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  // Use JWT session (default)
  session: { strategy: "jwt" },
  // Add any custom callbacks or options here if needed
});

// Required environment variables:
// - GOOGLE_CLIENT_ID
// - GOOGLE_CLIENT_SECRET
// - GITHUB_CLIENT_ID
// - GITHUB_CLIENT_SECRET
// - NEXTAUTH_SECRET
// - DATABASE_URL 