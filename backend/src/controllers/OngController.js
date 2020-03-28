import generateUniqueId from '../utils/generateUniqueId';

import conection from '../database/connection';

export default {
  async index(req, res) {
    const ongs = await conection('ongs').select('*');

    return res.json({ ongs });
  },

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();

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
