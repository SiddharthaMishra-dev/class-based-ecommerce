export const addItem = (item) => ({ type: 'addItem' ,payload:item});
export const removeCart=()=>({type:'removeCart'});
export const removeItem=(id)=>({type:'removeItem',payload:id});