import { z } from "zod";

export const subjectFormSchema = z.object({
    id: z.coerce.number().optional(),
    name: z.string().min(1, { message: "Subject name is required!" }),
    teachers: z.array(z.string()), // Array of teacher IDs
});

export type SubjectFormSchema = z.infer<typeof subjectFormSchema>;