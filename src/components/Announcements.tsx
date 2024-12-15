const Announcements = () => {
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>Announcements</h1>
                <span className='text-xs text-gray-400'>View All</span>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <div className='bg-skyBlue rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
                        <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025-01-01</span>
                    </div>
                    <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus autem quisquam, placeat praesentium.</p>
                </div>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <div className='bg-flowerPurpleLight rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
                        <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025-01-01</span>
                    </div>
                    <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nulla error veniam vel asperiores ratione ipsum.</p>
                </div>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <div className='bg-sunYellowLight rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
                        <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025-01-01</span>
                    </div>
                    <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est quod exercitationem molestias adipisci asperiores, eius quam!</p>
                </div>
            </div>
        </div>
    )
}

export default Announcements