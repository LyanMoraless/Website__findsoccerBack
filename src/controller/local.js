const Local = require('../modelos/Local');

async function getAllLocals(req, res, next) {
    try {
        res.send(await Local.findAll())
    }
    catch(err) {
        next(err)
    }
};
async function getOneLocal(req, res, next) {
    try {
        const local = await Local.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!local) throw new Error("Local não existe");
        res.send(local);
    }
    catch (err) {
        next(err);
    }
};
async function insertLocal(req, res, next) { 
    try {
        const local = await Local.create(req.body);
        res.send(local);
    } catch (err) {
        next(err);
    }
};
async function updateLocal(req, res, next) { 
    try {
        const local = await Local.findOne({
            where: {
                id: req.params.id
            }
        }); 
        
        if (!local) throw new Error("Local não existe");

        local.set(req.body);

        await local.save();

        res.send(local);

    } catch (err) {
        next(err);
    }
};
async function deleteLocal(req, res, next) { 
    try {
        const local = await Local.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!local) throw new Error("Local não existe");

        await local.destroy();

        res.send({ success: true });

    } catch (err) {
        next(err);
    }
};


// router.get('/', (req, res) => {
//     res.send(Local.listar());
// })

// router.post('/', (req, res) => {
//     let local = new Local().assign(req.body);
//     local.salvar();
//     res.status(200).send(local);
// })

// router.get('/cidades', (req, res) => {
//     let dados = Local.listar().map(local => ({nome: local.endereco.cidade, estado: local.endereco.estado}));
//     res.send(dados);
// })

// router.get('/:id', (req, res) => {
//     res.send(Local.consultar(req.params.id));
// })

// router.put('/:id', (req, res) => {
//     let local = Local.consultar(req.params.id).assign(req.body);
//     local.salvar();
//     res.send(local);
// })

// router.delete('/:id', (req, res) => {
//     Local.consultar(req.params.id).excluir();
//     res.status(200).send('OK');
// })


module.exports = { getAllLocals, getOneLocal, insertLocal, updateLocal, deleteLocal }