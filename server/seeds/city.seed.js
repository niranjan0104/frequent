const mongoose = require('mongoose');
const City = require('../models/city');

const california = "64c0d011d09dca709d489920";
const newYork = "64c0d011d09dca709d489921";
const haryana = "64c0d011d09dca709d489922";
const punjab = "64c0d011d09dca709d489923"

const newCity = [
  {
    name: 'Los Angeles',
    state: california
  },
  {
    name: 'San Francisco',
    state: california
  },
  
  {
    name: 'New York City',
    state: newYork
  },
  {
    name: 'San Buff',
    state: newYork
  },

  {
    name: 'Gurgaon',
    state: haryana
  },
  {
    name: 'Faridabad',
    state: haryana
  },

  {
    name: 'Mohali',
    state: punjab
  },
  {
    name: 'Ludhiana',
    state: punjab
  },
];

async function saveCity(){
  try{
  mongoose.connect('mongodb://localhost:27017/frequent_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
       await City.deleteMany({})
       const saveCity = await City.insertMany(newCity);
       console.log('city saved successfully:', saveCity);
    }catch(e){
        console.log('Error saving State:', e)
    }
}

saveCity();
