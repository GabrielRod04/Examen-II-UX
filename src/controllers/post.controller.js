import Post from '../models/post.model.js';

export const createPost = async (req, res, next) => {
  try {
    const { title, content, authorId } = req.body;

    const newPost = new Post({ title, content, authorId });
    await newPost.save();

    res.status(201).json({
      mensaje: 'Post creado exitosamente',
      postId: newPost._id
    });
  } catch (error) {
    next(error);
  }
};
