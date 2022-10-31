const Product = require('../models/Product');

exports.createProduct = (req, res, next) => {
  const productObject = req.body;
  const product = new Product({
    productId: productObject.productId,
    type: productObject.type,
    name: productObject.name,
    description: productObject.description,
    color: productObject.color,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    quantity : productObject.quantity,
    price : productObject.price,
  });

  product.save().then(
    () => {
      res.status(201).json({
        message: 'Produit ajouté avec succès'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({ error: error });
    }
  );
};

exports.getOneProduct = (req, res, next) => {
    Product.findOne({
      _id: req.params.id
    }).then(
      (product) => {
        res.status(200).json(product);
      }
    ).catch(
      (error) => {
        res.status(404).json({ error: error });
      }
    );
  };
  
  exports.modifyProduct = (req, res, next) => {
    const body = req.body
    const productObject = req.file ?
    {
      ...body,
      imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    }: {...req.body}
    Product.updateOne({_id: req.params.id}, productObject).then(
      () => {
        res.status(201).json({
          message: 'Produit modifié avec succès'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({ error: error });
      }
    );
  };
  
  exports.deleteProduct = (req, res, next) => {
    Product.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Produit supprimé avec succès'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({ error: error });
      }
    );
  };
  
  exports.getAllProducts = (req, res, next) => {
    Product.find().sort({createdAt: 'desc'}).then(
      (product) => {
        res.status(200).json(products);
      }
    ).catch(
      (error) => {
        res.status(400).json({ error: error });
      }
    );
  };
