import React, { useState } from 'react'
import { GrGallery } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { presets } from '../../data/filters';

const CreatePostModal = () => {
    const [image, setImage] = useState( null )
    const [filters, setFilters] = useState( false )
    const [filterChange, setFilterChange] = useState( 'none' )
    const [lastForm, setLastForm] = useState( false )
    const handleImageChange = ( e ) => {
        let file = e.target.files[0]
        let imageURL = URL.createObjectURL( file )
        setImage( imageURL )
    }


    return (
        <>
            <div className="fixed   flex left-0 min-h-screen  justify-center items-center top-0 z-200 w-full bg-black/70">
                <div className="flex w-full justify-center items-stretch">
                    <div className={`shadow-2xl ${filters ? 'rounded-e-0' : 'rounded-md'}   bg-white xl:w-1/3 lg:w-2/3 md:w-4/5 sm:w-[90%] shadow-gray-400`}>

                        {
                            image ? (
                                <>
                                    <div className="flex justify-between py-3 px-3 items-center">
                                        <IoMdArrowBack onClick={() => {
                                            setImage( null )
                                            setFilters( false )
                                        }} className='text-xl cursor-pointer' />
                                        <h3 className='text-xl'>Create</h3>
                                        <h3 onClick={() => setFilters( true )} className={`text-md font-bold ${filters && 'hidden'} cursor-pointer text-blue-500`}>Next</h3>

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

                                    <img style={{
                                        filter: filterChange
                                    }} src={image} className='w-full h-full object-cover' />


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
                    <div className={`bg-white ${filters ? 'w-100' : 'w-0'} transition-all duration-300 min-h-100`}>
                        <h3 onClick={() => setLastForm( true )} className={`text-md font-bold ${filters ? 'block' : 'hidden'} text-end px-4 py-3 cursor-pointer text-blue-500`}>
                            {lastForm ? 'Post' : 'Next'}
                        </h3>
                        {
                            lastForm ? (
                                <>
                                    <div className="px-2 pt-1 gap-3">
                                        <div className="flex gap-3">
                                            <img src="https://media.istockphoto.com/id/1488375208/photo/hot-air-balloon-flight-over-blue-sky.jpg?s=612x612&w=0&k=20&c=bOdqdU5EIsBQlMR-iIhKRbyVqhSuiTe7wBfhFl5nxZ4=" className='w-10 h-10 rounded-full object-cover' alt="" />
                                            <h4 className="text-sm font-semibold">
                                                Username
                                            </h4>
                                        </div>
                                        <textarea name="" className='border-0 outline-0 p-4 text-sm my-4 w-full bg-gray-100 h-50' id=""></textarea>
                                        <div className="flex justify-between">
                                            <h4>😲</h4>
                                            <p className="text-sm text-gray-500">
                                                0/2200
                                            </p>
                                        </div>
                                        <div className="flex text-sm text-gray-500 justify-between items-center">
                                            <h5>Location</h5>
                                            <h4>location icion</h4>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="grid gap-5 px-2 pt-1  grid-cols-3">
                                        {
                                            presets.map( ( item, index ) => {
                                                return <div onClick={() => setFilterChange( item.filter )} className='shadow-2xl rounded-xl border border-gray-300 text-center capitalize  shadow-gray-400 w-full h-30'>
                                                    <img style={{
                                                        filter: item.filter
                                                    }} src="https://media.istockphoto.com/id/1488375208/photo/hot-air-balloon-flight-over-blue-sky.jpg?s=612x612&w=0&k=20&c=bOdqdU5EIsBQlMR-iIhKRbyVqhSuiTe7wBfhFl5nxZ4=" className='w-full h-full object-cover ' alt="" />
                                                    <h4 className="text-sm font-semibold">
                                                        {item.name}
                                                    </h4>
                                                </div>
                                            } )
                                        }
                                    </div>
                                </>
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePostModal