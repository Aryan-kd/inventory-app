const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add a email'],
      unique: true,
      trim: true, // To cut down all the white space from the input field from adding to database
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please enter the valid email',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minLenght: [6, 'Password must be up to 6 characters'],
      maxLenght: [15, 'Password must not be above 15 characters'],
    },
    photo: {
      type: String,
      required: [true, 'Please add a image'],
      default:
        'https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg',
    },
    phone: {
      type: String,
      default: '+91',
    },
    bio: {
      type: String,
      maxLenght: [250, 'Bio must not be above 250 characters'],
      default: 'Bio',
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
