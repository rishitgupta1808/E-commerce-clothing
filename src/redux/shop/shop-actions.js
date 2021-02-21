import { firestore,convertDataToMap } from "../../firebase/firebase.config";

export const startCollections = () =>({
    type :'START_FETCHING_COLLECTION'
})
export const successCollections = (mapCollection)=>({

    type : 'SUCCESS_FETCHING_COLLECTION',
    payload : mapCollection 
})
export const errorCollections = (errorMessage)=>({

    type :'SHOW_ERROR',
    payload : errorMessage
})

export const fetchCollectionsFromStore = () =>{
    return dispatch =>{
    const collectionRef = firestore.collection('collections');
    dispatch(startCollections);

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertDataToMap(snapshot);
      //updateCollections(collectionsMap);
      dispatch(successCollections(collectionsMap));
    }).catch(error=>dispatch(errorCollections(error)));

    }

}