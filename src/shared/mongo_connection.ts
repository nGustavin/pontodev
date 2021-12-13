import monk from 'monk'
const url = `mongousr:mongopwd@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;

const mongo = monk(url)
mongo.then(() => console.log('Connected correctly to server'))
export {mongo}