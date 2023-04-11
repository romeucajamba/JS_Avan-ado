  const funca1 = () => {

    console.log("Sou a funcao1 estou sendo invocada  pela função main")
    const valor = true;
    try{
        if (valor){
            throw new Error("Deu erro no valor");
        }

    }catch(error){
        console.error(`sametihin is error: ${error}`)
        throw error; //serve para capiturar o erro mostrar
    }
  }

 const funca2 = () => {
    console.log("Sou a funcao2 estou sendo invocada  pela função main")
    dssf;
  }


  const main = () =>{
    try{
        funca1();
        funca2();

        console.info("Passou pela funcao main por aqui!")
    }catch(error){
        console.log(error);
    }
  }

  main();