import express from 'express'
import { addPost, deletePost, getPosts, updatePost } from '../controllers/postController.js'

export const postRouter = express.Router()


postRouter.post( '/add-post', addPost )

postRouter.get( '/get-posts', getPosts )

postRouter.put( '/update-post', updatePost )

postRouter.delete( '/delete/post', deletePost )