const { Jogador, MidiasJogador, Time, MidiasTime} = require("../models");

const TimesController =  {
    index: async(req,res) => {
        const idLogado = req.session.jogador.id;
        try{
            const times = await Time.findAll({
                include: [{
                    model: Jogador,
                    require: true
                },{
                    model: MidiasTime,
                    require: true,
                }]
            });

            const jogadores = await Jogador.findAll();

            return res.render('times', {times, idLogado, jogadores} );
        }
        catch(error){
            console.log(error);
        }
    },
    ingressar: async(req,res) => {
        const idTime = req.params.id;
        try{
            await Jogador.update({
                times_id: req.params.id,
            },{ where: {id: req.session.jogador.id}}
        )   
            
         return res.redirect("/time/exibir/"+idTime);
    
        } catch(error){
            return res.send(error);
        }
    },
    exibir: async (req, res) => {
        const { id } = req.params;
        const idLogado = req.session.jogador.id;

        try {
            let times = [];
            const time = await Time.findByPk(id, {
                include: [{
                    model: Jogador,
                    require: true
                },{
                    model: MidiasTime,
                    require: true,
                }]})

            const jogadores = await Jogador.findAll();
            

            times.push(time);
            return res.render('times', {times, idLogado, jogadores} );

        } catch (error) {
            return res.send(error);
        }

        
    }
}

module.exports = TimesController;