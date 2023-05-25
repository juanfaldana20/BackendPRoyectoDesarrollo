const listarTask = async (req, res = express.request) => {
    const task = await Task.find().populate('user', 'name')


    try{
        task.user = req.uid
        const saved = await task.save()
        res.json({
            ok:true,
            task:saved
        })
    } catch(error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            task:' Tnternal Error'
        })
    }
}