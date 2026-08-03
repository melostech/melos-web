import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Enter a valid email address").max(254),
  projectType: z.string().trim().min(1, "Select a project type"),
  message: z.string().trim().min(10, "Please provide more detail about your project").max(5000),
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
