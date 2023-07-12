// Import methods to save and get data from the indexedDB databse in './databse.js'

import { getDb, putDb } from './database';
import { header } from './header';

export default class {
    constructor() {
        const localData = localStorage.getItem('content');

        // check if Code Mirror is loaded
        if (typeof CodeMirror === 'undefined') {
            throw new Error('CodeMirror is not loaded');
        }

        this.editor = CodeMirror(document.querySelector('#main'), {
            value: '',
            mode: 'javascript',
            theme: 'monokai',
            lineNumbers: true,
            lineWrapping: true,
            autofocus: true,
            indentUnit: 2,
            tabSize: 2,
        });

        //
        
    }
}