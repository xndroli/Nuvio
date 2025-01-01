import Announcements from "@/components/Announcements"
import AttendanceChartContainer from "@/components/AttendanceChartContainer"
import CountChartContainer from "@/components/CountChartContainer"
import EventCalendarContainer from "@/components/EventCalendarContainer"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage = async (props: { searchParams: Promise<{ [keys: string]: string | undefined }> }) => {
    //{ searchParams, }: { searchParams: { [keys: string]: string | undefined } 
    //const params = await searchParams; // await the resolution of the promise
    const searchParams = await props.searchParams;

    return (
        <div className='p-4 flex gap-4 flex-col md:flex-row'>
            {/* Left Side */}
            <div className='w-full lg:w-2/3 flex flex-col gap-8'>
                {/* User Cards */}
                <div className='flex gap-4 justify-between flex-wrap'>
                    <UserCard type='admin' />
                    <UserCard type='teacher' />
                    <UserCard type='student' />
                    <UserCard type='parent' />
                </div>
                {/* Middle Charts */}
                <div className='flex gap-4 flex-col lg:flex-row'>
                    {/* Count Chart */}
                    <div className='w-full lg:w-1/3 h-[450px]'>
                        <CountChartContainer />
                    </div>
                    {/* Attendance Chart */}
                    <div className='w-full lg:w-2/3 h-[450px]'>
                        <AttendanceChartContainer />
                    </div>
                </div>
                {/* Bottom Chart */}
                <div className='w-full h-[500px]'>
                    <FinanceChart />
                </div>
            </div>
            {/* Right Side */}
            <div className='w-full lg:w-1/3 flex-col gap-8'>
                <EventCalendarContainer searchParams={searchParams} />
                <Announcements />
            </div>
        </div>
    )
};

export default AdminPage;