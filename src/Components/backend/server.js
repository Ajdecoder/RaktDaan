const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/donorApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const donorSchema = new mongoose.Schema({
  name: String,
  email: String,
  dateOfBirth: String,
  location: String,
  bloodGroup: String,
  mobileNumber: String,
});

const Donor = mongoose.model('Donor', donorSchema);

app.post('/submitDonor', async (req, res) => {
  const { name, email, dateOfBirth, location, bloodGroup, mobileNumber } = req.body;

  try {
    const newDonor = new Donor({
      name,
      email,
      dateOfBirth,
      location,
      bloodGroup,
      mobileNumber,
    });

    await newDonor.save();
    res.status(200).json({ success: true, message: 'Donor information saved successfully.' });
  } catch (error) {
    console.error('Error saving donor information:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
