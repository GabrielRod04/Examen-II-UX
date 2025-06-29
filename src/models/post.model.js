import mongoose from 'mongoose';
//Info importante: Post contiene título, contenido y referencia a un usuario (authorId) como ObjectId para relacionar los posts con usuarios.
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  authorId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

const Post = mongoose.model('Post', postSchema);

export default Post;
