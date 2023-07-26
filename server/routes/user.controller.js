
const User = require('../models/users');
const Country = require("../models/country");
const State = require("../models/state");
const City = require("../models/city");

exports.postUser = async (req, res) => {
  let { body: {
            firstName,
            lastName,
            email,
            // country,
            // state,
            // city,
            // gender,
            // dateOfBirth,
            // age
        }
      } = req;
     
    try{
       const user = new User({
        firstName,
        lastName,
        email,
        // country,
        // state,
        // city,
        // gender,
        // dateOfBirth,
        // age
       });

      await user.save();
      return res.status(200).json({
        "statusCode": 201,
        "message": "user added sucessfully",
        "data": {_id: user._id}
      });
    }catch(e){
        res.status(500).json({
          error : e.message
        })
    }
}

exports.getUsers = async (req, res) => {
      try{
        const usersData = await User.find().sort({"_id": -1});
        return res.status(200).json({
          "statusCode": 200,
          "message": "List",
          "data": {
            "records": usersData
          }
        });
      }catch(e){
          res.status(500).json({
            error : e.message
          })
      }
  }
  
exports.getSpecificUser = async (req, res) => {
    try{
      const {
        params: {
            id
        }
      } = req;
      const usersData = await User.findById(id);
      return res.status(200).json({
        "statusCode": 200,
        "message": "Detail",
        "data": {
             usersData
        }
      });
    }catch(e){
        res.status(500).json({
          error : e.message
        })
    }
}

  
exports.country = async (req, res) => {
  try{
    const countryData = await Country.find();
    
    return res.status(200).json({
      "statusCode": 200,
      "message": "List",
      "data": {
        "records": countryData
      }
    });
  }catch(e){
      res.status(500).json({
        error : e.message
      })
  }
}

exports.getState = async (req, res) => {
  try{
    const {
      params: {
        countryId
      }
    } = req;
    const stateData = await State.find({country: countryId });
    return res.status(200).json({
      "statusCode": 200,
      "message": "List",
      "data": {
          "records": stateData
      }
    });
  }catch(e){
      res.status(500).json({
        error : e.message
      })
  }
}

exports.getCity = async (req, res) => {
  try{
    const {
      params: {
        cityId
      }
    } = req;
   
    const cityData = await City.find({city: cityId });
    return res.status(201).json({
      "statusCode": 201,
      "message": "List",
      "data": {
          "records": cityData
      }
    });
  }catch(e){
      res.status(500).json({
        error : e.message
      })
  }
}



