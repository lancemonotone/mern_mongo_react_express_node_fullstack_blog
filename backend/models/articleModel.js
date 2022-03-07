const mongoose = require( 'mongoose' )

const articleSchema = mongoose.Schema( {
  comments: {
    type    : Array,
    required: [false]
  },
  name    : {
    type    : String,
    required: [true, 'Please add a name']
  },
  upvotes : {
    type    : Number,
    required: [false]
  }
}, {
  timestamps: true
} )

module.exports = mongoose.model( 'Article', articleSchema )
