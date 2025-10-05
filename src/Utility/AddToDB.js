const getStoredBook=()=>{
const storedDBSTR=localStorage.getItem('readList')

if(storedDBSTR){
    const storedBookData=JSON.parse(storedDBSTR)
    return storedBookData;
}
else{
    return [];
}
}
const addToStoredDB=(id)=>{
const storedBookData=getStoredBook()
if(storedBookData.includes(id)){
    alert('This id already exist!')
}
else{
    storedBookData.push(id)
    const data=JSON.stringify(storedBookData)
    localStorage.setItem('readList',data)
}
}

export {addToStoredDB};
