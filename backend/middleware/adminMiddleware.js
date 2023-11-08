import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

const adminProtected = asyncHandler(async (req, res, next) => {
  // Ellenőrizd, hogy a kéréshez tartozik-e felhasználói azonosító
  if (!req.user) {
    return res.status(401).json({ message: 'Nincs jogosultság' });
  }

  try {
    // Keresd meg a felhasználót az azonosítója alapján a MongoDB-ben
    const user = await User.findById(req.user._id);

    // Ellenőrizd, hogy a felhasználó létezik és admin jogosultsága van
    if (user && user.isAdmin) {
      // Ha az admin, akkor engedd tovább a kérést
      next();
    } else {
      res.status(403).json({ message: 'Nincs admin jogosultság' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Szerver hiba' });
  }
});

export { adminProtected };
