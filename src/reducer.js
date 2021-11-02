export const initialState = {
    basket: [],
};

//selector
export const getBasketTotal=(basket) =>
basket?.reduce((amount,item) => item.price+amount, 0);


const reducer = (state, action) => {

    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':

        //******************************************* */
        //OVO BRISE PROIZVODE PO INDEXU
        //****************************************** */
        
        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
        let newBasket = [...state.basket];

        if(index >= 0) {
            newBasket.splice(index, 1);

        }else {
            console.warn(
                `Catn remove product (id: ${action.id}) as its not in basket !`
            )
        }
         return {
             ...state,
             basket: newBasket
         }

         //****************************************** */
         //OVO JE BRISALO SVE PROIZVODE SA ISTIM ID
         //****************************************** */

        // return {
            //     ...state,
            //     basket: state.basket.filter(item => item.id !== action.id)
            // }

            default:
                return state;
    }
};

export default reducer;