import {Request, Response} from 'express'
import {connect} from '../database'
import {Post} from '../interfaces/post.interface'

export async function getPost(req: Request, res: Response): Promise<Response>{
    const conn = await connect();
    const post = await conn.query('SELECT * FROM node_mysql_ts.posts;');

    return res.json(post[0]);
}

export async function createPost(req: Request, res: Response) {
    const newPost: Post = req.body;
    const conn = await connect();
    await conn.query('Insert into posts set ?', [newPost]);
    console.log(newPost);
    return res.json({
        message: "New post has been created!"
    });
}

export async function getPostby(req: Request, res: Response): Promise<Response> {
    const id = req.params.PostId;
    const conn = await connect();
    const posts = await conn.query('Select * from posts where id=?', [id]);
    return res.json(posts[0]);
}

export async function deletePost(req: Request, res: Response){
    const id = req.params.PostId;
    const conn = await connect();
    await conn.query('delete from posts where id = ?;', [id]);
    return res.json({
        message: `The post ${id} has been deleted!`
    });
}

export async function updatePost(req: Request, res: Response) {
    const id = req.params.PostId;
    const updatedata: Post = req.body;
    const conn = await connect();
    await conn.query('update posts set ? where id = ?;', [updatedata, id]);
    return res.json({
        message: `The post ${id} has been updated!`
    });
}