import { Api } from './api.js';
export {CategoriesApi, Category}

class Category{
    constructor( id, description ){
        if(id) {
            this.id = id;
        }
        this.description = description;
    }
}

class CategoriesApi{

    static get url() {
        return `${Api.baseUrl}/categories`;
    }

    static async getCategories(id, controller){
        if(id === undefined) {
            return await Api.get(CategoriesApi.url, true, controller);
        }
        return await Api.get(`${CategoriesApi.url}/${id}`, true, controller)
    }

    static async getCategoryById( category, controller ){
        if ( Number.isInteger(category.id)){
            return await Api.get(`${CategoriesApi.url}/${category.id}` , true , controller);
        }
    }

    static async postCategory( category , controller ){
        if ( typeof category.description === 'string' || category.description instanceof String ){
            return await Api.post(CategoriesApi.url , true ,  category, controller);
        }
    }

    static async putCategory(id,description, controller ){
        if ( Number.isInteger(id)){
            return await Api.put( `${CategoriesApi.url}/${id}` , true ,  {description : description} , controller );
        }
    }

    static async deleteCategory( id, controller ){
        if ( Number.isInteger(id) ){
            return await Api.delete( `${CategoriesApi.url}/${id}` , true , controller)
        }
    }
}
