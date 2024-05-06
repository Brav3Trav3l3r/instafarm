import { z } from "zod";
import validator from "validator";

export const signUpFormSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be atleast 2 letters" }),
    email: z.string().refine(validator.isEmail),
    phoneNumber: z.string().refine(validator.isMobilePhone),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const signInFormSchema = z.object({
  email: z.string().refine(validator.isEmail),
  password: z.string(),
});
