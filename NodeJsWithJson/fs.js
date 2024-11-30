const { error, log } = require("console")
const fs = require("fs")

    // Sync and Async
// fs.writeFileSync("hello.txt", "Hello World")
// fs.writeFile("hello.txt", "Hello World", (error) => {})

    // Sync and Async
// fs.appendFileSync("hello.txt", " How are you?")
// fs.appendFile("hello.txt", " How are you?", (error) => {})

    // Sync and Async
// const result = fs.readFileSync('./hello.txt', 'utf-8')
// console.log(result)

// fs.readFile('./hello.txt', 'utf-8', (error, result) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(result)
//     }
// })


    // Sync and Async
// fs.copyFileSync("./hello.txt", "./hello3.txt")
// fs.copyFile("./hello.txt", "./hello2.txt", (error, result) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("File Copied")
//     }
// })

    // Sync and Async
// fs.unlinkSync("./hello2.txt")
// fs.unlink("./hello3.txt", (error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("File Deleted")
//     }
// })

    // Sync and Async'
// fs.renameSync("./hello.txt", "./hello4.txt")
// fs.rename("./hello4.txt", "./hello.txt", (error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("File Renamed")
//     }
// })

    // Sync and Async
// fs.mkdirSync("./hello")
// fs.mkdir("./hello2", (error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("Folder Created")
//     }
// })

    // Sync and Async
// fs.rmdirSync("./hello2")
// fs.rmdir("./hello", (error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log("Folder Deleted")
//     }
// })

console.log(fs.statSync("./hello.txt"));
