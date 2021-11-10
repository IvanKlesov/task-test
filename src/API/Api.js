import axios from 'axios';

export default class AddressService {
    static async getStreet() {
    const response = await axios.get('https://dispex.org/api/vtest/Request/streets');
    return response;
    }

    static async  getById(id) {    
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;       
    }

    static async  getCommentsByPostId(id) {    
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;       
    }
}

