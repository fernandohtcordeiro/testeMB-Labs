import Evento from '../models/Evento';

class DashboardController{

  async show(req, res){
   

    const { user_id } = req.headers;

    const evento = await Evento.find({ user: user_id })

    return res.json(evento);

  }

}

export default new DashboardController();