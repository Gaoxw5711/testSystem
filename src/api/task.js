import {BaseURL, axios} from './config';

//-----------------------------------测试任务列表---------------------------------------------
export const getTaskList = params => { return axios.get(`${BaseURL}/testTask/list`, { params: params })};

//-----------------------------------删除测试任务---------------------------------------------
export const removeTaskById = params => { return axios.get(`${BaseURL}/testTask/delTask`, { params: params })};

//-----------------------------------新增测试任务---------------------------------------------
export const addTask = params => { return axios.post(`${BaseURL}/testTask/addTask`,  params)};

//-----------------------------------更新测试任务---------------------------------------------
export const updateTask = params => { return axios.post(`${BaseURL}/testTask/updateTask`,  params)};