const isAnagram = async (string1, string2) => {
    let n1= string1.length
    let n2= string2.length
    if(n1!=n2){
        return false
    }
    //remove spaces and convert strings to lower case
    string1 = await string1.trim().toLowerCase()
    string2 = await string2.trim().toLowerCase()
    //compare sorted strings
    let sortedString1 = await string1.split("").sort().join("")
    console.log(sortedString1)
    let sortedString2 = await string2.split("").sort().join("")
    console.log(sortedString2)
    for(let i=0;i<n1;i++){
     let compare = await sortedString1[i] === sortedString2[i]
     console.log(compare)
     return compare
}
}

const string1 = "abcd"
const string2 = "Cadb"

isAnagram(string1, string2).then((res)=>{
    if (res) {
        console.log("1")
    }else{
        console.log("0")
    }
})