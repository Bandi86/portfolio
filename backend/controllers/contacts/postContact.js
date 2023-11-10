import Contact from '../../models/Contact.js';
import User from '../../models/User.js';
import asyncHandler from 'express-async-handler';

// Post Contact

export const postContact = asyncHandler(async (req, res) => {
    try {
        const { name, email, text, id } = req.body;
    
        if (!text) {
          return res.status(400).json({ message: 'Hiányzó kötelező adatok' });
        }
    
        let user = await User.findOne({ email });
        let contact;
    
        if (id) {
          contact = new Contact({
            registered_contacts: {
              name,
              email,
              text,
            },
          });
        } else {
          contact = new Contact({
            not_registered_contacts: {
              name,
              email,
              text,
            },
          });
        }
    
        await contact.save();
        user.contacts.push(contact);
        await user.save();
    
        return res
          .status(201)
          .json({ message: 'Sikeres kapcsolatfelvétel', contact });
      } catch (error) {
        console.error('Hiba a kontakt mentése közben', error);
        return res.status(500).json({ message: 'Valami hiba történt' });
      }
    });


