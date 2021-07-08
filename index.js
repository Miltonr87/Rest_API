const customExpress = require('./config/customExpress');
const connection = require('./infra/connection');

connection.connect((error) => {
    if(error) {
        console.log('Error')
    } else {
        console.log('Success')
        
        const app = customExpress()
        app.listen(3000, () => console.log('Server is running on 3000'))
    }
})
