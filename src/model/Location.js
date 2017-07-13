/**
 * Lyft API
 * Drive your app to success with Lyft's API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api-support@lyft.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import LatLng from './LatLng';





/**
* The Location model module.
* @module model/Location
* @version 1.0.0
*/
export default class Location {
    /**
    * Constructs a new <code>Location</code>.
    * @alias module:model/Location
    * @class
    * @implements module:model/LatLng
    * @param lat {Number} The latitude component of a location
    * @param lng {Number} The longitude component of a location
    */

    constructor(lat, lng) {
        

        
        LatLng.call(this, lat, lng);

        

        
    }

    /**
    * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Location} obj Optional instance to populate.
    * @return {module:model/Location} The populated <code>Location</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Location();

            
            
            LatLng.constructFromObject(data, obj);

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }

    /**
    * A human readable address at/near the given location
    * @member {String} address
    */
    address = undefined;


    // Implement LatLng interface:
    /**
    * The latitude component of a location
    * @member {Number} lat
    */
    lat = undefined;
/**
    * The longitude component of a location
    * @member {Number} lng
    */
    lng = undefined;







}

