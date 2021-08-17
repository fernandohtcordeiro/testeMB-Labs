import  { Schema, model }  from "mongoose";

const EventoSchema = new Schema({
  thumbnail: String,
  description: String,
  date: String,
  hora: String,
  price: Number,
  location: String,
  status: Boolean,
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }

},{
  toJSON: {
    virtuals: true
  }
});

EventoSchema.virtual('thumbnail_url').get(function(){
  return `http://localhost:3333/files/${this.thumbnail}`;
})

export default model('Evento', EventoSchema);