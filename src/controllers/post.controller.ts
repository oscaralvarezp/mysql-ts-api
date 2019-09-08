import { Request, Response } from 'express';

import { mysqlConnect } from "../database";
import { Post } from "../interfaces/Post.interface";

class PostController {
    
    async getPosts(req: Request, res :Response): Promise<Response> {
        // Getting all db posts
        const conn = await mysqlConnect();
        const posts = await conn.query('SELECT * FROM posts');
        
        return res.json(posts[0]);
    }

    async getPost(req: Request, res: Response): Promise<Response> {
        // getting the id of the url
        const { id } = req.params;
        // Getting an specific post by id
        const conn = await mysqlConnect();
        const post = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
        
        return res.json(post[0]);
    }

    async createPost(req: Request, res: Response): Promise<Response> {
        const newPost: Post = req.body;
        // Creating post on db
        const conn = await mysqlConnect();
        await conn.query('INSERT INTO posts SET ?',[ newPost ]);
        
        return res.json({
            message: 'Post Created Successfully',
            Post: newPost
        });
    }

    async deletePost(req: Request, res: Response): Promise<Response> {
        // getting post's specific id by url for delete it
        const { id } = req.params;
        // Deleting a post of db
        const conn = await mysqlConnect();
        await conn.query('DELETE FROM posts WHERE id = ?', [id]);

        return res.json({
            message: 'Post Deleted Successfully',
        });
    }

    async updatePost(req: Request, res: Response): Promise<Response> {
        // getting data for update it: id by url and body
        const { id } = req.params;
        const updatePost: Post = req.body;
        // Updating a post of db
        const conn = await mysqlConnect();
        await conn.query('UPDATE posts SET ? WHERE id = ?', [updatePost, id]);

        return res.json({
            message: 'Post Updated Successfully',
        });
    }

}

const postController = new PostController();
export default postController;