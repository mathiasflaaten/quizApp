
async function getData(url) {
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
         console.log('hei',error.message); 
    }
}

export default getData; 