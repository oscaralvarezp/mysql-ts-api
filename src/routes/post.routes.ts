import { Router } from 'express';
const router = Router();

import postController from '../controllers/post.controller';
const { getPosts, getPost ,createPost, deletePost, updatePost } = postController;

router.route('/')
    .get(getPosts)
    .post(createPost)

router.route('/:id')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);

export default router;