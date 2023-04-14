const data = [
    {
      id: 1,
      name: "Goku",
      habilidades:["Hameha","Henkidama","Kaioken"], 
      image : "./Personajes/vegetaLocal.png"
    },
    {
      id: 2,
    name: "vugetta",
      habilidades:["Bigbang","Final","Galik"]
    },
    {
      id: 3,
      name: "friza",
      habilidades:["Lazer","Blaster","Nova"]
  
    }
  ]
  
  function getData() {
    return new Promise((resolve, reject) => {
        if (data.length === 0) {
            reject(new Error('Data is empty'))
        }
        setTimeout(()=> {
            resolve (data);
        }, 2000)
    })
  }

getData()
.then((response)=>console.log(response))
.catch((err)=>console.log(err.message))