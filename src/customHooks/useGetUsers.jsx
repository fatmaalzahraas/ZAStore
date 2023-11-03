import {useState, useEffect} from 'react';
import {db} from '../firebase.config';
import {collection, getDocs} from 'firebase/firestore'
const useGetUsers = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collection(db, 'users'));
            setData(data.docs.map(doc => ({...doc.data(), id: doc.id})));
            setLoad(false);
        }
        getData();
    }, []);
    return {data, load};
}
export default useGetUsers;