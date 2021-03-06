const knex = require('../config/knex_config.js');

module.exports = (app) => {
  app.post('/citations', (req, res) => {
    knex('citations').insert(req.body)
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  });

  app.put('/citations/:id', (req, res) => {
    knex('citations')
      .where('id', req.params.id)
      .update(req.body)
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  });
};
