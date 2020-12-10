export { geomapApi , AddressData }

class AddressData{
    constructor( calle , numero , ciudad){
        this.calle = calle;
        this.numero = numero;
        this.ciudad = ciudad;
    }
}

class geomapApi {

    static async getCoordinates( addressData, controller  ){
        const address = encodeURIComponent(addressData.calle) + ','
            + encodeURIComponent(addressData.numero) + ','
            + encodeURIComponent(addressData.ciudad);

        const res =  await this.get(`${this.baseUrl}/geocode/v1/json?q=${address}&countrycode=ar&key=${this.apiKey}` , controller)

        if ( res.results[0] ){
            const geometry = res.results[0].geometry;
            return [ geometry.lng  , geometry.lat ];
        }
        return [ 0 , 0 ];

    }
    //Chequear el puerto y si va el /api
    static get baseUrl() {
        return 'https://api.opencagedata.com';
    }

    static get timeout() {
        return 60 * 1000;
    }

    static get apiKey(){
        return '9e6a46b41cfe43798db7c0ef1928f808';
    }
    static async fetch(url, init= {}, controller) {
        controller = controller || new AbortController();
        const timer = setTimeout(() => controller.abort(), this.timeout);
        init.signal = controller.signal

        try {
            const response = await fetch(url, init);
            const text = await response.text();
            const result = text ? (JSON).parse(text) : {};
            return result
        } finally {
            clearTimeout(timer);
        }
    }

    static async get(url, controller) {
        return await this.fetch(url, {}, controller)
    }
}