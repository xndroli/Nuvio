'use server';

//import { revalidatePath } from "next/cache";
import { SubjectFormSchema } from "./formValidationSchema";
import prisma from "./prisma";

// Server action data mutations

type CurrentState = { success: boolean, error: boolean };

export const createSubject = async (currentState: CurrentState, data: SubjectFormSchema) => {
    try {
        await prisma.subject.create({ 
            data: {
                name: data.name,
            },
        });

        // revalidatePath("/list/subjects");
        return { success: true, error: false };
    } catch (error) {
        console.log(error);
        return { success: false, error: true };
    }
};

export const updateSubject = async (currentState: CurrentState, data: SubjectFormSchema) => {
    try {
        await prisma.subject.update({
            where: {
                id: data.id, // Use the id from the form data
            },
            data: {
                name: data.name,
            },
        });

        // revalidatePath("/list/subjects");
        return { success: true, error: false };
    } catch (error) {
        console.log(error);
        return { success: false, error: true };
    }
};

export const deleteSubject = async (currentState: CurrentState, data: SubjectFormSchema) => {
    try {
        await prisma.subject.delete({
            where: {
                id: data.id, // Use the id from the form data
            },
        });

        // revalidatePath("/list/subjects");
        return { success: true, error: false };
    } catch (error) {
        console.log(error);
        return { success: false, error: true };
    }
};