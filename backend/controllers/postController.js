import { Post } from "../models/postModel.js"

export const addPost = async ( req, res ) => {


    const { media, caption } = req.body

    const newPost = await Post.create( {
        caption, media
    } )


    res.send( newPost )




}

export const getPosts = async ( req, res ) => {


    let allPosts = await Post.find()
    res.send( allPosts )


}

export const updatePost = ( req, res ) => {
    res.send( 'updated' )
}

export const deletePost = ( req, res ) => {
    res.send( 'post deleted' )
}