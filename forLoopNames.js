//Create an array named "classNames" containing at least 15 names of people present in the class. Ensure that the names are stored as string values within the array.
const classNames = ["John", "Caezzy", "Jimwell", "Christian", "Kieth", "Raja", "Ian", "Mark", "Eldrich", "Jerome", "Jerry", "Joven", "Dominic", "Jessica", "Avuenallive"]

//Use a for loop to iterate through the "classNames" array.
for (let a = 0; a < classNames.length; a++)

{
//inside the loop, use the console.log function to print each name one by one to the console.
console.log(classNames[a])

//Check if the current name being printed matches your name. If it does, terminate the loop using the "break" statement.
if (classNames[a] === "Jerry"){
    break
    }
}