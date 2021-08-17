import Evento from '../models/Evento';
import User from '../models/User';

class EventoController{

  async index(req, res){
      const { status } = req.query;

      const evento = await Evento.find({ status });

      return res.json(evento);

  }

  async store(req, res){
    const { filename } = req.file;
    const { description, price, date, hora, location, status } = req.body;
    const { user_id } = req.headers;
  
    const evento = await Evento.create({
      user: user_id,
      thumbnail: filename,
      description,
      date,
      hora,
      price,
      location,
      status,
    });

    return res.json({ evento });
  }

  async update(req, res){
    const { filename } = req.file;
    const { evento_id } = req.params;
    const { description, price, date, hora, location, status } = req.body;
    const { user_id } = req.headers;


    const user = await User.findById(user_id);
    const evento = await Evento.findById(evento_id);

    if(String(user._id) !== String(evento.user)){
      return res.status(401).json({ error: 'Não autorizado.'});
    }

      await Evento.updateOne({_id: evento_id }, {
      user: user_id,
      thumbnail: filename,
      description,
      date,
      hora,
      price,
      location,
      status,
    })

    return res.send();

  }

  async destroy(req, res){
    const { evento_id } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    const evento = await Evento.findById(evento_id);

    if(String(user._id) !== String(evento.user)){
      return res.status(401).json({ error: 'Não autorizado.'});
    }


   await Evento.findByIdAndDelete({ _id: evento_id}); 

   return res.json({message: "Excluida com sucesso!" });
 }
}

export default new EventoController();