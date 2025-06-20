import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
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
        if (!user) return null;
        // Compare password (plain text for now, use bcrypt in production)
        // If you want to use bcrypt, hash passwords in your seed and registration logic
        // const isValid = await compare(credentials.password, user.password);
        const isValid = credentials.password === user.password;
        if (!isValid) return null;
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        };
      },
    }),
  ],
  // Use JWT session (default)
  session: { strategy: "jwt" },
}); 