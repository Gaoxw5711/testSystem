import {BaseURL, axios} from './config';

//-----------------------------------项目列表---------------------------------------------
export const getProjectList = params => { return axios.get(`${BaseURL}/project/list`, { params: params })};

//-----------------------------------删除项目---------------------------------------------
export const removeProjectById = params => { return axios.get(`${BaseURL}/project/delProject`, { params: params })};

//-----------------------------------新增项目---------------------------------------------
export const addProject = params => { return axios.post(`${BaseURL}/project/addProject`,  params)};

//-----------------------------------更新项目---------------------------------------------
export const updateProject = params => { return axios.post(`${BaseURL}/project/updateProject`,  params)};
