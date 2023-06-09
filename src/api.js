

import {API_URL} from './config'

const getMealByID = async (id) => {
    const response = await fetch(`${API_URL}lookup.php?i=${id}`);
    return await response.json();
}

const getAllCategories = async () => {
    const response = await fetch(`${API_URL}categories.php`);
    return await response.json();
}

const getFilteredCategories = async (catName) => {
    const response = await fetch(`${API_URL}filter.php?c=${catName}`);
    return await response.json();
}

export { getMealByID, getAllCategories, getFilteredCategories }