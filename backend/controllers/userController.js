const bcrypt = require('bcrypt')

const User = require('../models/User')

const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            phone: req.body.phone,
            isAdmin: false
        });
        user.save()
            .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
}

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Identifiant incorrect'});
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Mot de passe incorrect' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(403).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
}

exports.getOneUser = (req, res, next) => {
    User.findOne({ _id: req.params.id })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Identifiant incorrect'});
            }
            res.status(200).json(user)
        })
        .catch(error => res.status(500).json({ error }));
}

exports.editOneUser = (req, res, next) => {
    const body = req.body
    const userObject = req.file ?
    {
      ...body,
      avatar: `${req.protocol}://${req.get("host")}/avatars/${req.file.filename}`,
    }: {...req.body}
    User.updateOne({_id: req.params.id}, userObject).then(
      () => {
        res.status(201).json({
          message: 'Informations modifiées avec succès'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({ error: error });
      }
    );
  };