const knex = require('../config/knex_config.js');

module.exports = (app) => {
  app.get('/participants', (req, res) => {
    knex.select().table('participants')
      .then(participants => res.status(200).send(participants))
      .catch(err => res.status(500).send(err));
  });

  app.post('/participants', (req, res) => {
    knex('participants').insert(req.body)
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  });

  app.put('/participants/:id', (req, res) => {
    knex('participants')
      .where('id', req.params.id)
      .update(req.body.data, Object.keys(req.body.data))
      .then(participants => res.status(200).send({ participants }))
      .catch(err => res.status(500).send(err));
  });

  app.delete('/participants/:id', (req, res) => {
    knex('participants')
      .where('id', req.params.id)
      .del()
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  });

  app.get('/participants/:id', (req, res) => {
    knex('participants')
      .where('id', req.params.id)
      .then(participants => res.status(200).send(participants))
      .catch(err => res.status(500).send(err));
  });

  app.get('/participants/:id/citations', (req, res) => {
    knex('citations')
      .where('participant_id', req.params.id)
      .then(citations => res.status(200).send(citations))
      .catch(err => res.status(500).send(err));
  });
};
