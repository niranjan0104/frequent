const mongoose = require('mongoose');
const Country = require('../models/country');

const newCountry = [
  {
    name: 'United States'
  },
  {
    name: 'India',
  }
];

async function saveCountry(){
  try{
  mongoose.connect('mongodb://localhost:27017/frequent_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
       await Country.deleteMany({})
       const saveCountry = await Country.insertMany(newCountry);
       console.log('Country saved successfully:', saveCountry);
    }catch(e){
        console.log('Error saving country:', e)
    }
}

saveCountry();
