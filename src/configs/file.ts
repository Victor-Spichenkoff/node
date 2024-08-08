import { readFile, writeFile, unlink } from "fs/promises"

export const execute = async () => {
    const path = __dirname + "/texto.txt"
    //-------------------
    //Escrever
    //-------------------
    const content1 = ["Victor", "Emma", "Cavalo", "Nhe"].join("\n")
    console.log("Escrevendo...")
    await writeFile(path, content1)
    console.log("Escrito")


    console.log("\n\n")


    //-------------------
    //Lendo
    //-------------------
    console.log("Lendo....")
    const txt = await readFile(path, { encoding: "utf8" })
    console.log(txt)


    console.log("\n\n")
    console.log("Adicionanando fome")


    //-------------------
    //Editando
    //-------------------
    const txtArray = txt.split("\n")
    txtArray.push("Tô com Fome")
    await writeFile(path, txtArray.join("\n"))


    console.log("\n----------------")
    console.log("Novo arquivo")
    console.log("\n----------------")


    const txt2 = await readFile(path, { encoding: "utf8" })
    console.log(txt2)

    console.log("\n\n")
    //-------------------
    //Apagar
    //-------------------
    console.log("APAGANDO...")


    setTimeout(()=>{
        unlink(path)
    }, 1000)


    console.log("APAGADO")
    console.log("\nFIM")
}


execute()