 //  store simple data to local storage 

const addToLocalStorage = (id) => {
    let details = {};

    const storedDetails = localStorage.getItem('details');
    if(storedDetails){
        details = JSON.parse(storedDetails);
    }

    const quantity = details[id];
    if(quantity){
        const newQuantity = quantity + 1;
        details[id] = newQuantity;
    }
    else{
        details[id] = 1;
    }
    localStorage.setItem('details', JSON.stringify(details));
};

  // get from local storage 
  const addFromLs = () =>{
    let details = {};

    const storedDetails = localStorage.getItem('details');
    if(storedDetails){
        details = JSON.parse(storedDetails);
    }
    return details;
}

export {
    addToLocalStorage,
    addFromLs,
};