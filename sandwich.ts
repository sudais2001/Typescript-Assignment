function sandwich(...items: string[]): void{
    console.log("sandwich order:")

    for (let i = 0; i < items.length; i++){
        console.log(` - ${items[i]}`)
    }
    }
console.log("enjoy your sandwich Sudais Khan")


sandwich('capsicum','tomato','chicken')
sandwich('beef','chese')
sandwich('garlic','chicken','mayo sauce')
