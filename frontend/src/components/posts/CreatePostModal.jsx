import React, { useState } from 'react'
import { GrGallery } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";

const CreatePostModal = () => {
    const [image, setImage] = useState( null )
    const [filter, setFilters] = useState( false )

    const handleImageChange = ( e ) => {
        let file = e.target.files[0]
        let imageURL = URL.createObjectURL( file )
        setImage( imageURL )
    }


    return (
        <>
            <div className="fixed   flex left-0 min-h-screen  justify-center items-center top-0 z-200 w-full bg-black/70">
                <div className="flex w-full justify-center items-stretch">
                    <div className={`shadow-2xl ${filter ? 'rounded-e-0' : 'rounded-md'}   bg-white xl:w-1/3 lg:w-2/3 md:w-4/5 sm:w-[90%] shadow-gray-400`}>

                        {
                            image ? (
                                <>
                                    <div className="flex justify-between py-3 px-3 items-center">
                                        <IoMdArrowBack onClick={() => {
                                            setImage( null )
                                            setFilters( false )
                                        }} className='text-xl cursor-pointer' />
                                        <h3 className='text-xl'>Create</h3>
                                        <h3 onClick={() => setFilters( true )} className='text-md font-bold cursor-pointer text-blue-500'>Next</h3>

                                    </div>
                                </>
                            ) : (
                                <>
                                    <h3 className="text-xl border border-b border-gray-300 py-3 border-e-0 border-s-0 border-t-0 text-center">
                                        Create new Post
                                    </h3>
                                </>
                            )
                        }


                        {/* main post content */}

                        <div className="h-150   flex flex-col justify-center items-center gap-3">
                            {
                                image ? <>

                                    <img src={image} className='w-full h-full object-cover' />


                                </> : <>
                                    <GrGallery className='text-8xl' />
                                    <input onChange={handleImageChange} type="file" className='hidden' name="media" id="media" />
                                    <h3 className="text-xl">
                                        Drag and drop photos and videos here
                                    </h3>
                                    <label htmlFor="media" className='bg-blue-500 text-sm font-semibold text-white py-2 cursor-pointer rounded-md px-4'>Select on the computer</label>
                                </>
                            }


                        </div>
                        {/* image/video content */}

                    </div>
                    {/* filter */}
                    <div className={`bg-white ${filter ? 'w-100' : 'w-0'} transition-all duration-300 min-h-100`}></div>
                </div>
            </div>
        </>
    )
}

export default CreatePostModal