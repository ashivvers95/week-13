const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll()
  .then((result) => {
    
  }).catch((err) => {
    
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne() 
  .then((result) => {
    
  }).catch((err) => {
    
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create()
  .then((result) => {
    
  }).catch((err) => {
    
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update()
  .then((result) => {
    
  }).catch((err) => {
    
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  
  Category.destroy({
    where: {
    id: req.params.id
  }
})
  .then((result) => {
    
  }).catch((err) => {
    
  });
});

module.exports = router;
