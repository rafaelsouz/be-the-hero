import conection from '../database/connection';

export default {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const incident = await conection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(incident);
  },
};
