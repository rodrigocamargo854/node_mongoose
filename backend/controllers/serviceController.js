const { Service: ServiceModel } = require("../models/Service");

const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };
      //orm mongo call
      const response = await ServiceModel.create(service);
      res.status(201).json({ response, msg: "Sucess" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find();

      res.json(services);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const service = await ServiceModel.findById(id);

      if (!service) {
        res.status(404).json({
          msg: "service ot found",
        });
        return;
      }

      res.json(service);
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const service = await ServiceModel.findById(id);

      if (!service) {
        res.status(404).json({
          msg: "service ot found",
        });
        return;
      }

      const deleteService = await ServiceModel.findByIdAndDelete(id)
      res.status(200).json({deleteService,msg:"deleted service"})


    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = serviceController;