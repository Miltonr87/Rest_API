const Attendance = require('../models/attendance')

module.exports = app => {
    app.get('/attendance', (req, res) => res.send('<h3>You are on attendance rout with GET method</h3>'))

    app.post('/attendance', (req, res) => {
        const attendance = req.body

        Attendance.addData(attendance)
        res.send('Post Attendance')
    })
}