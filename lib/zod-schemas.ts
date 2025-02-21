import { z } from "zod";

// Signup Schema
export const signupSchema = z
  .object({
    name: z.string().min(1, { message: "Name must be at least 1 character" }),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Login Schema
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
