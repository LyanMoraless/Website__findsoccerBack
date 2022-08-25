const Quadra = require('../modelos/Quadra');

async function getAllQuadras(req, res, next) {
    try {
        res.send(await Quadra.findAll());
    }
    catch (err) {
        next(err);
    }
}
async function getOneQuadra(req, res, next) {
    try {
        const quadra = await Quadra.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!quadra) throw new Error("Quadra não existe");
        res.send(quadra);
    }
    catch (err) {
        next(err);
    }
}
async function insertQuadra(req, res, next) { 
    try {
        const quadra = await Quadra.create(req.body);
        res.send(quadra);
    } catch (err) {
        next(err);
    }
}
async function updateQuadra(req, res, next) { 
    try {
        const quadra = await Quadra.findOne({
            where: {
                id: req.params.id
            }
        }); 
        
        if (!quadra) throw new Error("Quadra não existe");

        quadra.set(req.body);

        await quadra.save();

        res.send(quadra);

    } catch (err) {
        next(err);
    }
}
async function deleteQuadra(req, res, next) { 
    try {
        const quadra = await Quadra.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!quadra) throw new Error("Quadra não existe");

        await quadra.destroy();

        res.send({ success: true });

    } catch (err) {
        next(err);
    }
}



// router.get('/', (req, res) => {
//     res.send(Quadra.listar());
// })

// router.post('/', (req, res) => {
//     let quadra = new Quadra().assign(req.body);
//     quadra.salvar();
//     res.status(200).send(quadra);
// })

// router.get('/:id', (req, res) => {
//     res.send(Quadra.consultar(req.params.id));
// })

// router.put('/:id', (req, res) => {
//     let quadra = Quadra.consultar(req.params.id).assign(req.body);
//     quadra.salvar();
//     res.send(quadra);
// })

// router.delete('/:id', (req, res) => {
//     Quadra.consultar(req.params.id).excluir();
//     res.status(200).send('OK');
// })

module.exports = { getAllQuadras, getOneQuadra, insertQuadra, updateQuadra, deleteQuadra }