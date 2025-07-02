import { firebaseAdmin } from '../services/firebase.service.js';

// Crear usuario en Firebase y MongoDB
export const createUser = async (req, res, next) => {
  try {
    const { email, password, nombre, apellido } = req.body;

    // Crear usuario en Firebase Auth
    const userRecord = await firebaseAdmin.auth().createUser({
      email,
      password,
    });

    // Guardar datos adicionales en MongoDB
    const newUser = new User({
      firebaseUid: userRecord.uid,
      email,
      nombre,
      apellido,
    });

    await newUser.save();

    res.status(201).json({
      mensaje: 'Usuario creado exitosamente en Firebase y MongoDB',
      idUsuarioMongo: newUser._id,
      idUsuarioFirebase: userRecord.uid,
    });
  } catch (error) {
    next(error);
  }
};


export const logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // 3) Buscar posts del usuario
    const posts = await (await import('../models/post.model.js')).default.find({ authorId: user._id });

    res.json({
      email: user.email,
      nombre: user.nombre,
      apellido: user.apellido,
      posts,
    });
  } catch (error) {
    next(error);
  }
};

export const logOut = (req, res) => {
  res.json({ mensaje: 'Que tengas un lindo dia, hasta luego' });
};
