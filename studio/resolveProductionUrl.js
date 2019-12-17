export default function resolveProductionUrl(document) {
    
    //  First, we select a specific type of document
        
            // Then we get its ID
            let id = document._id;
       
    return `localhost:8000/preview?pageId=${id}`
   
      

}