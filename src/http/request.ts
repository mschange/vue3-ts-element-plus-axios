import axios from 'axios';
import { inject } from './index';
import Config from '../config';

const service = axios.create({
  baseURL: Config.unionService, // api的base_url
  timeout: 20000 // 请求超时时间
});

inject(service);

export default service;