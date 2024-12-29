import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountChartContainer from "@/components/CountChartContainer"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
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
                        <AttendanceChart />
                    </div>
                </div>
                {/* Bottom Chart */}
                <div className='w-full h-[500px]'>
                    <FinanceChart />
                </div>
            </div>
            {/* Right Side */}
            <div className='w-full lg:w-1/3 flex-col gap-8'>
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    )
};

export default AdminPage;