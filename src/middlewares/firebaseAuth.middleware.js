// src/middlewares/firebaseAuth.middleware.js
import { getAuth } from 'firebase-admin/auth';

export const verifyFirebaseToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ mensaje: 'Token de autorización no proporcionado o malformado' });
    }

    const idToken = authHeader.split(' ')[1];

    const decodedToken = await getAuth().verifyIdToken(idToken);
    req.user = decodedToken;

    next();
  } catch (error) {
    res.status(401).json({
      mensaje: 'Token inválido o expirado',
      error: error.message
    });
  }
};
