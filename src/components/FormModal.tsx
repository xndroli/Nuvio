'use client'

import { deleteSubject } from "@/lib/actions";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";
// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm";

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

const ParentForm = dynamic(() => import("./forms/ParentForm"));
const ClassForm = dynamic(() => import("./forms/ClassForm"));
const LessonForm = dynamic(() => import("./forms/LessonForm"));
const ExamForm = dynamic(() => import("./forms/ExamForm"));
const AssignmentForm = dynamic(() => import("./forms/AssignmentForm"));
const ResultForm = dynamic(() => import("./forms/ResultForm"));
const AttendanceForm = dynamic(() => import("./forms/AttendanceForm"));
const EventForm = dynamic(() => import("./forms/EventForm"));
const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"));

const forms: { 
    [key: string]: (setOpen: Dispatch<SetStateAction<boolean>>, type: "create" | "update", data?: any) => React.ReactElement;
} = {
    subject: (setOpen, type, data) => <SubjectForm type={type} data={data} setOpen={setOpen} />,
    teacher: (setOpen, type, data) => <TeacherForm type={type} data={data} setOpen={setOpen} />,
    student: (setOpen, type, data) => <StudentForm type={type} data={data} setOpen={setOpen} />,
    parent: (setOpen, type, data) => <ParentForm type={type} data={data} setOpen={setOpen} />,
    class: (setOpen, type, data) => <ClassForm type={type} data={data} setOpen={setOpen} />,
    lesson: (setOpen, type, data) => <LessonForm type={type} data={data} setOpen={setOpen} />,
    exam: (setOpen, type, data) => <ExamForm type={type} data={data} setOpen={setOpen} />,
    assignment: (setOpen, type, data) => <AssignmentForm type={type} data={data} setOpen={setOpen} />,
    result: (setOpen, type, data) => <ResultForm type={type} data={data} setOpen={setOpen} />,
    attendance: (setOpen, type, data) => <AttendanceForm type={type} data={data} setOpen={setOpen} />,
    event: (setOpen, type, data) => <EventForm type={type} data={data} setOpen={setOpen} />,
    announcement: (setOpen, type, data) => <AnnouncementForm type={type} data={data} setOpen={setOpen} />,
};

const FormModal = ({ table, type, data, id }:{
    table: "teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event" |"announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number | string;
}) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = type === "create" ? "bg-sunYellow" : type === "update" ? "bg-skyBlue" : "bg-flowerPurple";

    const [open, setOpen] = useState(false);

    // Form to handle delete operation
    const Form = () => {
        const [state, formAction] = useActionState(deleteSubject, { success: false, error: false });

        const router = useRouter();
        
        useEffect(() => {
            if (state.success) {
                toast(`Subject has been deleted successfully!`);
                setOpen(false);
                router.refresh();
            }
        });

        return type === "delete" && id ? (
            <form action='' className='p-4 flex flex-col gap-4'>
                <span className='text-center font-medium'>All data will be lost. Are you sure you want to delete this {table}?</span>
                <button className='bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center'>Delete</button>
            </form>
        ) : type === "create" || type === "update" ? (
            forms[table](setOpen, type, data)
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