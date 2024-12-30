'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { subjectFormSchema, SubjectFormSchema } from "@/lib/formValidationSchema";
import { createSubject } from "@/lib/actions";
import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SubjectForm = ({ type, data, setOpen }: { type: "create" | "update"; data?: any; setOpen: Dispatch<SetStateAction<boolean>>; }) => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
    } = useForm<SubjectFormSchema>({
        resolver: zodResolver(subjectFormSchema),
    });

    const [state, formAction] = useActionState(createSubject, { success: false, error: false });

    const onSubmit = handleSubmit((data) => {console.log(data); formAction(data); });

    const router = useRouter();

    useEffect(() => {
        if (state.success) {
            toast(`Subject has been ${ type === "create" ? "created" : "updated" } successfully!`);
            setOpen(false);
            router.refresh();
        }
    });

    return (
        <form className='flex flex-col gap-8' onSubmit={onSubmit}>
            <h1 className='text-xl font-semibold'>{ type === "create" ? "Create a new subject" : "Update the subject" }</h1>
            <div className='flex justify-between flex-wrap gap-4'>
                <InputField 
                    label="Subject name" 
                    name='name' 
                    defaultValue={data?.name} 
                    register={register} 
                    error={errors?.name} 
                />
            </div>
            {state.error && <span className='text-red-500'>Something went wrong!</span>}
            <button className='bg-blue-400 text-white p-2 rounded-md'>
                { type === "create" ? "Create" : "Update" }
            </button>
        </form>
    )
};

export default SubjectForm;