import crypto from 'crypto';

import conection from '../database/connection';

export default {
  async index(req, res) {
    const ongs = await conection('ongs').select('*');

    return res.json({ ongs });
  },

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await conection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  },
};
