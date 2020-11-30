import { Api } from './api.js';
export { CategoriesApi , Category };

class Category{
    constructor( id , description ){
        this.id = id;
        this.description = description;
    }
}

class CategoriesApi{

    static get Url() {
        return `${Api.baseUrl}/categories`;
    }

    static async getCategories(controller){ 
        return await Api.get(CategoriesApi.Url , true , controller);
    }
    static async getCategoryById( id , controller ){
        if ( Number.isInteger(id)){
            return await Api.get(`${CategoriesApi.Url}/${id}` , true , controller);
        }
    }

    static async postCategory( name , controller ){
        if ( typeof name === 'string' || name instanceof String ){
            return await Api.post(CategoriesApi.Url , true ,  { description: name }, controller);
        } 
    }

    static async putCategory( name  , id , controller ){
        if ( Number.isInteger(id) && ( typeof name === 'string' || name instanceof String )  ){
            return await Api.put( `${CategoriesApi.Url}/${id}` , true ,  { description: name } , controller );
        } 
    }
    
    static async deleteCategory( id , controller ){
        if ( Number.isInteger(id) ){
            return await Api.post( `${CategoriesApi.Url}/${id}` , true , controller)
        }
    }     
}
