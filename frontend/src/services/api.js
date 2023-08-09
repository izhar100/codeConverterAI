import axios from 'axios';

const BASE_URL = 'https://codeconverterai.onrender.com'; 

const api = {
  convertCode: async (code, sourceLanguage, targetLanguage) => {
    const url = `${BASE_URL}/convert`;
    const data = {
      code,
      sourceLanguage,
      targetLanguage,
    };
    return axios.post(url, data);
  },
  debugCode:async (code, sourceLanguage, targetLanguage) => {
    const url = `${BASE_URL}/debug`;
    const data = {
      code,
      sourceLanguage,
      targetLanguage,
    };
    return axios.post(url, data);
  },
  checkQualityCode:async (code, sourceLanguage, targetLanguage) => {
    const url = `${BASE_URL}/quality`;
    const data = {
      code,
      sourceLanguage,
      targetLanguage,
    };
    return axios.post(url, data);
  }
};

export default api;
