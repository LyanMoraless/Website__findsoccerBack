const QuadraTipo = require('../modelos/QuadraTipo');

async function getAll(req, res, next) {
    try {
        res.send(await QuadraTipo.findAll())
    }
    catch(err) {
        next(err)
    }
};
async function getOne(req, res, next) {
    try {
        const local = await QuadraTipo.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!local) throw new Error("QuadraTipo não existe");
        res.send(local);
    }
    catch (err) {
        next(err);
    }
};
async function insert(req, res, next) { 
    try {
        const local = await QuadraTipo.create(req.body);
        res.send(local);
    } catch (err) {
        next(err);
    }
};
async function update(req, res, next) { 
    try {
        const local = await QuadraTipo.findOne({
            where: {
                id: req.params.id
            }
        }); 
        
        if (!local) throw new Error("QuadraTipo não existe");

        local.set(req.body);

        await local.save();

        res.send(local);

    } catch (err) {
        next(err);
    }
};
async function remove(req, res, next) { 
    try {
        const local = await QuadraTipo.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!local) throw new Error("QuadraTipo não existe");

        await local.destroy();

        res.send({ success: true });

    } catch (err) {
        next(err);
    }
};


module.exports = { getAll, getOne, insert, update, remove }