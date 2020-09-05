import mongoose from 'mongoose';

async function connect(){

    try {
        await mongoose.connect('mongodb://localhost/ts-crud', {
            useNewUrlParser: true
        });
        console.log('>>> Database connected!');
    } catch (error) {
        console.log('Error: ', error);
    }
}

export default connect;
