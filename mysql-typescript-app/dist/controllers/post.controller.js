"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.deletePost = exports.getPostby = exports.createPost = exports.getPost = void 0;
const database_1 = require("../database");
function getPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const post = yield conn.query('SELECT * FROM node_mysql_ts.posts;');
        return res.json(post[0]);
    });
}
exports.getPost = getPost;
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('Insert into posts set ?', [newPost]);
        console.log(newPost);
        return res.json({
            message: "New post has been created!"
        });
    });
}
exports.createPost = createPost;
function getPostby(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.PostId;
        const conn = yield (0, database_1.connect)();
        const posts = yield conn.query('Select * from posts where id=?', [id]);
        return res.json(posts[0]);
    });
}
exports.getPostby = getPostby;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.PostId;
        const conn = yield (0, database_1.connect)();
        yield conn.query('delete from posts where id = ?;', [id]);
        return res.json({
            message: `The post ${id} has been deleted!`
        });
    });
}
exports.deletePost = deletePost;
function updatePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.PostId;
        const updatedata = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('update posts set ? where id = ?;', [updatedata, id]);
        return res.json({
            message: `The post ${id} has been updated!`
        });
    });
}
exports.updatePost = updatePost;
