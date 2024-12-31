'use client'

import { deleteClass, deleteSubject, deleteTeacher } from "@/lib/actions";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FormContainerProps } from "./FormContainer";

const deleteActionMap = {
    subject: deleteSubject,
    class: deleteClass,
    teacher: deleteTeacher,
    student: deleteSubject,
    parent: deleteSubject,
    lesson: deleteSubject,
    exam: deleteSubject,
    assignment: deleteSubject,
    result: deleteSubject,
    attendance: deleteSubject,
    event: deleteSubject,
    announcement: deleteSubject,
};

// Lazy Loading

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
    loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
    loading: () => <h1>Loading...</h1>,
});
const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
    loading: () => <h1>Loading...</h1>,
});
const ClassForm = dynamic(() => import("./forms/ClassForm"), {
    loading: () => <h1>Loading...</h1>,
});

// const ParentForm = dynamic(() => import("./forms/ParentForm"));
// const LessonForm = dynamic(() => import("./forms/LessonForm"));
// const ExamForm = dynamic(() => import("./forms/ExamForm"));
// const AssignmentForm = dynamic(() => import("./forms/AssignmentForm"));
// const ResultForm = dynamic(() => import("./forms/ResultForm"));
// const AttendanceForm = dynamic(() => import("./forms/AttendanceForm"));
// const EventForm = dynamic(() => import("./forms/EventForm"));
// const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"));

const forms: { 
    [key: string]: (
        setOpen: Dispatch<SetStateAction<boolean>>, 
        type: "create" | "update", 
        data?: any,
        relatedData?: any
    ) => React.ReactElement;
} = {
    subject: (setOpen, type, data, relatedData) => (
        <SubjectForm type={type} data={data} setOpen={setOpen} relatedData={relatedData} />
    ),
    class: (setOpen, type, data, relatedData) => (
        <ClassForm type={type} data={data} setOpen={setOpen} relatedData={relatedData} />
    ),
    teacher: (setOpen, type, data, relatedData) => (
        <TeacherForm type={type} data={data} setOpen={setOpen} relatedData={relatedData} />
    ),
    student: (setOpen, type, data, relatedData) => (
        <StudentForm type={type} data={data} setOpen={setOpen} relatedData={relatedData} />
    ),
    // parent: (setOpen, type, data) => <ParentForm type={type} data={data} setOpen={setOpen} />,
    // lesson: (setOpen, type, data) => <LessonForm type={type} data={data} setOpen={setOpen} />,
    // exam: (setOpen, type, data) => <ExamForm type={type} data={data} setOpen={setOpen} />,
    // assignment: (setOpen, type, data) => <AssignmentForm type={type} data={data} setOpen={setOpen} />,
    // result: (setOpen, type, data) => <ResultForm type={type} data={data} setOpen={setOpen} />,
    // attendance: (setOpen, type, data) => <AttendanceForm type={type} data={data} setOpen={setOpen} />,
    // event: (setOpen, type, data) => <EventForm type={type} data={data} setOpen={setOpen} />,
    // announcement: (setOpen, type, data) => <AnnouncementForm type={type} data={data} setOpen={setOpen} />,
};

const FormModal = ({ 
    table, 
    type, 
    data, 
    id, 
    relatedData 
}: FormContainerProps & { relatedData?: any }) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = type === "create" ? "bg-sunYellow" : type === "update" ? "bg-skyBlue" : "bg-flowerPurple";

    const [open, setOpen] = useState(false);

    // Form to handle delete operation
    const Form = () => {
        const [state, formAction] = useActionState(deleteActionMap[table], { success: false, error: false });

        const router = useRouter();
        
        useEffect(() => {
            if (state.success) {
                toast(`Subject has been deleted successfully!`);
                setOpen(false);
                router.refresh();
            }
        });

        return type === "delete" && id ? (
            <form action={formAction} className='p-4 flex flex-col gap-4'>
                <input type="text | number" name="id" value={id} hidden />
                <span className='text-center font-medium'>All data will be lost. Are you sure you want to delete this {table}?</span>
                <button className='bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center'>Delete</button>
            </form>
        ) : type === "create" || type === "update" ? (
            forms[table](setOpen, type, data, relatedData)
        ) : ("Form not found!");
    };
    
    return (
        <>
            <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`} onClick={() => setOpen(true)}>
                <Image src={`/${type}.png`} alt='' width={16} height={16} />
            </button>
            {open && (
                <div className='w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center'>
                    <div className='bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]'>
                        <Form />
                        <div className='absolute top-4 right-4 cursor-pointer' onClick={() => setOpen(false)}>
                            <Image src='/close.png' alt='' width={14} height={14} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};

export default FormModal;