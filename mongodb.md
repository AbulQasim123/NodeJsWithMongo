_____________MongoDB Basics_____________

______CMD_______

Check Current Database = db
Show All Databases = show databases
Create or Switch to a Database = use myDatabase
Show Collections in the Database = show collections
Create a Collection = db.createCollection("myCollection") = 
Insert Documents = 
db.myCollection.insertOne({ name: "John", age: 30, city: "Mumbai" })
db.myCollection.insertMany([
    { name: "Alice", age: 25, city: "Pune" },
    { name: "Bob", age: 35, city: "Delhi" }
])
View Documents = 
db.myCollection.find()
db.myCollection.find().pretty()

______CRUD Operations_______

------------Create  
db.users.insertOne({ username: "admin", role: "superuser" })
db.users.insertMany([
    { username: "user1", role: "editor" },
    { username: "user2", role: "viewer" }
])

------------Read
db.users.find()  // All documents
db.users.find({ role: "editor" })  // Filter by role
db.users.findOne({ username: "user1" })  // Single document
db.users.find({}, { username: 1, _id: 0 })

------------Update
db.users.updateOne(
    { username: "admin" },
    { $set: { role: "admin" } }
)
db.users.updateMany(
    { role: "viewer" },
    { $set: { status: "active" } }
)

------------Delete
db.users.deleteOne({ username: "user2" })
db.users.deleteMany({ role: "viewer" })

__________Indexing__________
Create Index = db.users.createIndex({ username: 1 })  // Ascending order
View Indexes = db.users.getIndexes()

_________Aggregation Framework_________

-------Basic Aggregation
db.sales.aggregate([
    { $match: { status: "completed" } },
    { $group: { _id: "$product", totalSales: { $sum: "$quantity" } } },
    { $sort: { totalSales: -1 } }
])

___________Useful Commands___________
Count Documents = db.myCollection.countDocuments()
Drop Collection = db.myCollection.drop()
Drop Database = db.dropDatabase()