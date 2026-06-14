import React from 'react'
import Sidebar from '../../components/main/Sidebar'
import MainContent from '../../components/main/MainContent'
import Suggestions from '../../components/main/Suggestions'

const Home = () => {
    return (
        <>

            {/* main page */}

            <div className="grid min-h-screen grid-cols-12">
                {/* sidebar */}
                <div className="col-span-3">
                    <Sidebar />
                </div>
                {/* main content */}
                <div className="col-span-5">
                    <MainContent />
                </div>
                {/* suggestion bar */}
                <div className="col-span-4">
                    <Suggestions />
                </div>
            </div>



        </>
    )
}

export default Home