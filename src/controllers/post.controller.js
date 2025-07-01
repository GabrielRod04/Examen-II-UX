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

export const listPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().populate('authorId', 'nombre apellido email');
    res.json({ posts });
  } catch (error) {
    next(error);
  }
};

export const editPost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const { title, content, authorId } = req.body;

    const updated = await Post.findByIdAndUpdate(
      postId,
      { title, content, authorId },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ mensaje: 'Post no encontrado' });
    }

    res.json({ mensaje: 'Post actualizado exitosamente' });
  } catch (error) {
    next(error);
  }
};



