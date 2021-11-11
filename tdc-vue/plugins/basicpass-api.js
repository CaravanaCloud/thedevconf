import Vue from 'vue'
import * as $basicpass from '../services/basicpass-api';

// plugin install
const install = Vue => {
    if (Vue.prototype.$basicpass) {
        return; // users plugin já foi instalado
    }
    console.log('installing the basicpass-api service as plugin...')
    Object.defineProperties(Vue.prototype, {
        $basicpass: {
            get() {
                return $basicpass;
            },
        },
    });
};

Vue.use({ install });