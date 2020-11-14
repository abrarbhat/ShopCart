import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer 4txFlIaXsjohx90r7GDWyUID96GRy-J__8rSACpWdDAeU-Pv4C2fpYLqPd3d9VHptVyRNVnucKcgYbl77MZWFp6eNTZSzVVq4br597X3iMYDLKpSgLTqL2JW0qWfX3Yx'
    }
});