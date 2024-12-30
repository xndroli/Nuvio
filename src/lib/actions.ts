"use server";

import { revalidatePath } from "next/cache";
import { SubjectFormSchema } from "./formValidationSchema";
import prisma from "./prisma";

// Server action data mutations

export const createSubject = async (data: SubjectFormSchema) => {
    try {
        await prisma.subject.create({ 
            data: {
                name: data.name,
            },
        });

        revalidatePath("/list/subjects");
    } catch (error) {
        console.log(error);
    }
};