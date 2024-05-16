// wc

let args = System.Environment.GetCommandLineArgs()

let filePath = args[1]

let fileLines = System.IO.File.ReadAllLines(filePath)
let arrayLength = Array.length(fileLines)
printfn "lines %d" arrayLength
