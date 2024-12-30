import { z } from "zod";

export const subjectFormSchema = z.object({
    id: z.coerce.number().optional(),
    name: z.string().min(1, { message: "Subject name is required!" }),
});

export type SubjectFormSchema = z.infer<typeof subjectFormSchema>;