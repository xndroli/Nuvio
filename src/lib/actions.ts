'use server';

import { clerkClient } from "@clerk/nextjs/server";
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
        const user = await clerkClient.users.createUser({
            username: data.username,
            password: data.password,
            firstName: data.name,
            lastName: data.surname,
            publicMetadata: { role: "teacher" },
        });

        await prisma.teacher.create({ 
            data: {
                id: user.id,
                username: data.username,
                name: data.name,
                surname: data.surname,
                email: data.email,
                phone: data.phone,
                address: data.address,
                image: data.image,
                bloodType: data.bloodType,
                birthday: data.birthday,
                sex: data.sex,
                subjects: {
                    connect: data.subjects?.map((subjectId: string) => ({ 
                        id: parseInt(subjectId),
                    })),
                },
            }
        });

        // revalidatePath("/list/teachers");
        return { success: true, error: false };
    } catch (error) {
        console.log(error);
        return { success: false, error: true };
    }
};

export const updateTeacher = async (currentState: CurrentState, data: TeacherFormSchema) => {
    if (!data.id) {
        return { success: false, error: true };
    };
    
    try {
        const user = await clerkClient.users.updateUser(data.id, {
            username: data.username,
            ...(data.password !== "" && { password: data.password }),
            firstName: data.name,
            lastName: data.surname,
            publicMetadata: { role: "teacher" },
        });

        await prisma.teacher.update({ 
            where: {
                id: data.id,
            },
            data: {
                ...(data.password !== "" && { password: data.password }),
                username: data.username,
                name: data.name,
                surname: data.surname,
                email: data.email,
                phone: data.phone,
                address: data.address,
                image: data.image,
                bloodType: data.bloodType,
                birthday: data.birthday,
                sex: data.sex,
                subjects: {
                    set: data.subjects?.map((subjectId: string) => ({ 
                        id: parseInt(subjectId),
                    })),
                },
            }
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
                id: id,
            },
        });

        // revalidatePath("/list/teachers");
        return { success: true, error: false };
    } catch (error) {
        console.log(error);
        return { success: false, error: true };
    }
};