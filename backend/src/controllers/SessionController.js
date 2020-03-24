import conection from '../database/connection';

export default {
  async store(req, res) {
    const { id } = req.body;

    const ong = await conection('ongs').where('id', id).select('name').first();

    if (!ong) {
      return res.status(400).json({ error: 'No ONG found whith this id' });
    }

    return res.json(ong);
  },
};
