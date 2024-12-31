'use server';

//import { revalidatePath } from "next/cache";
import { ClassFormSchema, SubjectFormSchema, TeacherFormSchema } from "./formValidationSchema";
import prisma from "./prisma";

// Server action data mutations

type CurrentState = { success: boolean, error: boolean };

export const createSubject = async (currentState: CurrentState, data: SubjectFormSchema) => {
    try {
        await prisma.subject.create({ 
            data: {
                name: data.name,
                teachers: {
                    connect: data.teachers.map((teacherId) => ({ id: teacherId })),
                },
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
                teachers: {
                    set: data.teachers.map((teacherId) => ({ id: teacherId })),
                },
            },
        });

        // revalidatePath("/list/subjects");
        return { success: true, error: false };
    } catch (error) {
        console.log(error);
        return { success: false, error: true };
    }
};

export const deleteSubject = async (currentState: CurrentState, data: FormData) => {
    const id = data.get("id") as string;

    try {
        await prisma.subject.delete({
            where: {
                id: parseInt(id),
            },
        });

        // revalidatePath("/list/subjects");
        return { success: true, error: false };
    } catch (error) {
        console.log(error);
        return { success: false, error: true };
    }
};

export const createClass = async (currentState: CurrentState, data: ClassFormSchema) => {
    try {
        await prisma.class.create({ 
            data,
        });

        // revalidatePath("/list/class");
        return { success: true, error: false };
    } catch (error) {
        console.log(error);
        return { success: false, error: true };
    }
};

export const updateClass = async (currentState: CurrentState, data: ClassFormSchema) => {
    try {
        await prisma.class.update({
            where: {
                id: data.id, // Use the id from the form data
            },
            data,
        });

        // revalidatePath("/list/class");
        return { success: true, error: false };
    } catch (error) {
        console.log(error);
        return { success: false, error: true };
    }
};

export const deleteClass = async (currentState: CurrentState, data: FormData) => {
    const id = data.get("id") as string;

    try {
        await prisma.class.delete({
            where: {
                id: parseInt(id),
            },
        });

        // revalidatePath("/list/class");
        return { success: true, error: false };
    } catch (error) {
        console.log(error);
        return { success: false, error: true };
    }
};

export const createTeacher = async (currentState: CurrentState, data: TeacherFormSchema) => {
    try {
        await prisma.teacher.create({ 
            data,
        });

        // revalidatePath("/list/teachers");
        return { success: true, error: false };
    } catch (error) {
        console.log(error);
        return { success: false, error: true };
    }
};

export const updateTeacher = async (currentState: CurrentState, data: TeacherFormSchema) => {
    try {
        await prisma.teacher.update({
            where: {
                id: data.id, // Use the id from the form data
            },
            data,
        });

        // revalidatePath("/list/teachers");
        return { success: true, error: false };
    } catch (error) {
        console.log(error);
        return { success: false, error: true };
    }
};

export const deleteTeacher = async (currentState: CurrentState, data: FormData) => {
    const id = data.get("id") as string;

    try {
        await prisma.teacher.delete({
            where: {
                id: parseInt(id),
            },
        });

        // revalidatePath("/list/teachers");
        return { success: true, error: false };
    } catch (error) {
        console.log(error);
        return { success: false, error: true };
    }
};