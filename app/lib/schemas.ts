import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  domain: z.string().min(2, "Domain is required"),
  requirement: z.string().min(10, "Please provide more detail about your requirement"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
