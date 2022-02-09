import { ref } from 'vue'
import { projectFirebase } from '../firebase/config'

const useCollection = (collection) => {

    let error = ref(null)

    const addDoc = async (doc) => {
        error.value = null
    
        try {
            await projectFirebase.collection(collection).add(doc)
        } 
        catch(err) {
            console.log(err.message)
            error.value = "Colud not send message"
        }
    }
    return {error, addDoc}
}

export default useCollection
















