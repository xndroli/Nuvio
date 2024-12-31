import { z } from "zod";

export const subjectFormSchema = z.object({
    id: z.coerce.number().optional(),
    name: z.string().min(1, { message: "Subject name is required!" }),
    teachers: z.array(z.string()), // Array of teacher IDs
});

export type SubjectFormSchema = z.infer<typeof subjectFormSchema>;

export const classFormSchema = z.object({
    id: z.coerce.number().optional(),
    name: z.string().min(1, { message: "Class name is required!" }),
    capacity: z.number().min(1, { message: "Class capacity is required!" }),
    gradeId: z.number().min(1, { message: "Grade level is required!" }),
    supervisorId: z.string().optional(),
});

export type ClassFormSchema = z.infer<typeof classFormSchema>;