import {Router} from 'express'
import {getPost, createPost, getPostby, deletePost, updatePost} from '../controllers/post.controller'

const router = Router();

router.route('/')
.get(getPost)
.post(createPost);

router.route('/:PostId')
.get(getPostby)
.delete(deletePost)
.put(updatePost);

export default router;