export { geomapApi }

class geomapApi {

    static async getCoordinates( data, controller  ){
        const address = encodeURIComponent(data);
        //const argISO = "AR"

        const res =  await this.get(`${this.baseUrl}geocoding/v5/mapbox.places/${address}.json?type=postcode&country=AR&access_token=pk.eyJ1IjoiYW5pdGFjcnV6IiwiYSI6ImNrZ3A5d2Z6ZDA3M3Iyc2tsbmJjeGd4N2EifQ.7XEbgzqidyEuJKVfFg4U2A` , controller)

        if ( res.message ){
            console.log("small oopsy")
            return [ 0 , 0 ];
        }
        if ( res.features ){
            return res.features[0].center;
        }
        console.log("big oopsy doopsy");
        return [ 0 , 0 ];

    }
    //Chequear el puerto y si va el /api
    static get baseUrl() {
        return 'https://api.mapbox.com/';
    }

    static get timeout() {
        return 60 * 1000;
    }

    static async fetch(url, init= {}, controller) {
        controller = controller || new AbortController();
        const timer = setTimeout(() => controller.abort(), this.timeout);
        init.signal = controller.signal

        try {
            const response = await fetch(url, init);
            const text = await response.text();
            console.log("AAA");
            console.log(text);
            console.log(response);
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