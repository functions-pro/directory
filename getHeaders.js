const cors = require('cors')({origin: true});

exports.getHeaders= (req, res) => {
  cors(req, res, () => 
      res.status(200).send({ ...req.headers })
  );
};
