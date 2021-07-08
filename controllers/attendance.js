module.exports = app => {
    app.get('/attendance', (req, res) => res.send('you are on attendance rout with GET method'))

    app.post('/attendance', (req, res) => {
        console.log('Attendance send')
        console.log(req.body)
        res.send('Post Attendance')
    })
     
     
}