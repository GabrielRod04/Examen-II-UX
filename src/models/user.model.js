import mongoose from 'mongoose';
// Info importante: Este User contiene el UID de Firebase, email, nombre y apellido.
const userSchema = new mongoose.Schema({
  firebaseUid: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },

}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
