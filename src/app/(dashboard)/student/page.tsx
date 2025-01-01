import Announcements from "@/components/Announcements"
import BigCalendarContainer from "@/components/BigCalendarContainer";
import EventCalendar from "@/components/EventCalendar"
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

const StudentPage = async () => {
    const { userId } = await auth();

    const classItem = await prisma.class.findMany({
        where: {
            students: { some: { id: userId! } },
        },
    });

    return (
        <div className='p-4 flex gap-4 flex-col xl:flex-row'>
            {/* Left Side */}
            <div className=''>
            {classItem.map((classItem) => (
                <div className='w-full xl:w-2/3' key={classItem.id}>
                    <div className='h-full bg-white p-4 rounded-md'>
                        <h1 className='text-xl font-semibold'>Schedule ({classItem.id})</h1>
                        <BigCalendarContainer type='classId' id={classItem.id} />
                    </div>
                </div>
            ))}
            </div>
            {/* Right Side */}
            <div className='w-full xl:w-1/3 flex flex-col gap-8'>
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
};

export default StudentPage;