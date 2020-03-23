import axios from 'axios';
import { BASE_URL } from '@constants/envs';

class ApiService {
	readonly client = axios.create({
		baseURL: BASE_URL,
	});
}

export default new ApiService();
