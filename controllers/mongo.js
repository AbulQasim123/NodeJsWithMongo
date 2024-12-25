db.students.insertOne( { name: "Alice", age: 14, grade: 8, city: "Mumbai", sports: ["cricket", "chess"]} )
db.students.insertMany([
    { name: "Mohammad", age: 15, grade: 9, city: "Pune", sports: ["football,cricket"] },
    { name: "Bob", age: 15, grade: 9, city: "Pune", sports: ["football,cricket"] },
    { name: "Charlie", age: 13, grade: 7, city: "Delhi", sports: ["swimming", "badminton"] },
    { name: "David", age: 14, grade: 8, city: "Mumbai", sports: ["tennis"] },
    { name: "Ella", age: 12, grade: 6, city: "Kolkata", sports: ["basketball"] },
    { name: "Frank", age: 13, grade: 7, city: "Chennai", sports: ["cricket", "football"] },
    { name: "Grace", age: 14, grade: 8, city: "Mumbai", sports: ["chess"] },
    { name: "Henry", age: 15, grade: 9, city: "Pune", sports: ["tennis", "swimming"] },
    { name: "Ivy", age: 12, grade: 6, city: "Delhi", sports: ["badminton", "cricket"] },
    { name: "Jack", age: 13, grade: 7, city: "Kolkata", sports: ["football"] },
    { name: "Kate", age: 14, grade: 8, city: "Mumbai", sports: ["chess", "tennis"] },
    { name: "Leo", age: 15, grade: 9, city: "Pune", sports: ["badminton"] },
    { name: "Mia", age: 13, grade: 7, city: "Delhi", sports: ["basketball", "cricket"] },
    { name: "Noah", age: 12, grade: 6, city: "Chennai", sports: ["swimming"] },
    { name: "Olivia", age: 14, grade: 8, city: "Mumbai", sports: ["football"] },
    { name: "Paul", age: 15, grade: 9, city: "Pune", sports: ["chess", "basketball"] },
    { name: "Quinn", age: 13, grade: 7, city: "Delhi", sports: ["cricket", "tennis"] },
    { name: "Rachel", age: 12, grade: 6, city: "Kolkata", sports: ["swimming"] },
    { name: "Sam", age: 14, grade: 8, city: "Mumbai", sports: ["badminton"] },
    { name: "Tina", age: 15, grade: 9, city: "Pune", sports: ["basketball", "tennis"] }
])

db.students.updateOne(
    { name: "Alice" },
    { $set: { name: 'Mohammad' } }
)

db.students.findOneAndReplace(
    { _id: ObjectId('6755ad33648b2749ae893bf9') },
    {   name: 'Bob',
        age: 15,
        grade: 9,
        city: 'Pune',
        sports: [ 'football', 'cricket' ]
      }, 
)

db.students.updateOne(
    { _id: ObjectId('6755ad33648b2749ae893bf9') },
    {
        $set: {
            sports: ['football', 'cricket']
        }
    }
)
