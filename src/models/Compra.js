import  { Schema, model }  from "mongoose";

const CompraSchema = new Schema({
  email: String,
  

});

export default model('Compra', CompraSchema);