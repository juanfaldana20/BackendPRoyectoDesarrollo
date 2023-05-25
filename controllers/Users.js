const listarUsuarios = async (req, res = express.request) => {
    const Usuarios = await Usuarios.find().populate('tareas', 'title')
    

    try{
        res.status({
            ok:true,
            usuarios,
        })
    } catch(error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg:' Error interno'
        })
    }
}