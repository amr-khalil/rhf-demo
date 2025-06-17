import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  state: z.array(z.string()).min(1).max(2),
  languagesSpoken: z.array(z.string()),
  gender: z.string().min(1, { message: "Required" }),
  skills: z.array(z.string()).max(2),
  registrationDateAndTime: z.date(),
  formerEmploymentPeriod: z.array(z.date()).min(2).max(2),
  salaryRange: z.array(z.number()).min(2).max(2),
  isTeacher: z.boolean(),
});

export type UserSchemaType = z.infer<typeof userSchema>;

export const defaultValues: UserSchemaType = {
  name: "",
  email: "",
  state: [],
  languagesSpoken: [],
  gender: "",
  skills: [],
  registrationDateAndTime: new Date(),
  formerEmploymentPeriod: [new Date(), new Date()],
  salaryRange: [0, 3000],
  isTeacher: true,
};
