import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  state: z.array(z.string()).min(1).max(2),
  languagesSpoken: z.array(z.string()),
});

export type UserSchemaType = z.infer<typeof userSchema>;

export const defaultValues: UserSchemaType = {
  name: "",
  email: "",
  state: [],
  languagesSpoken: [],
};
