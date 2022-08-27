function loadData(key) {
    try {
      let data = localStorage.getItem(key);
      data = JSON.parse(data);
      return data;
    } catch (error) {
      return undefined;
    }
  }
  
  function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function removeItem(){
    localStorage.removeItem("loginid");
  }
  
  export { loadData, saveData ,removeItem};