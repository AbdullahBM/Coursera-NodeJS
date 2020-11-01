const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'conFusion';

MongoClient.connect(url, (err, client) => {
assert.strictEqual(err, null);

console.log('Connected correctly to the server');

const db = client.db(dbName);
const collection = db.collection('dishes');

collection.insertOne({'name': 'Utthappizza', 'descriptin': 'test'}, (err, result) => {
    assert.strictEqual(err, null);
    console.log(`After insert:
    
    ${result.ops}`);

    collection.find({}).toArray((err, docs) => {
        assert.strictEqual(err, null);

        console.log(`Found
        
        ${docs}`);

        db.dropCollection('dishes', (err, result) => {
            assert.strictEqual(err, null);
            client.close();
        })
    })
})

})