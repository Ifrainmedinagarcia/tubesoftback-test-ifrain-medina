const sequelize = require('../database/db')
const Time = require('../database/models/Time')


const saveTime = async (req, res) => {
    const { time } = req.body
    try {
        await Time.create({
            time
        }).then(time => {
            res.status(200).json({
                message: `Time saved successfully`,
                res: time
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'time saving error'
        })
    }
}


const getTime = async (req, res) => {
    try {
        await Time.findAll().then(time => {
            res.status(200).json({
                res: time
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'error getting time',
            error
        })
    }
}


const deleteTime = async (req, res) => {
    try {
        Time.destroy({
            where: ({
                id_time: req.params.id
            })
        }).then(time => {
            res.status(200).json({
                message: 'time deleted successfully'
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'error clearing time'
        })
    }
}


exports.saveTime = saveTime
exports.getTime = getTime
exports.deleteTime = deleteTime