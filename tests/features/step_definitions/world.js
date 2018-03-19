var {setWorldConstructor} = require("cucumber");

class World {
    constructor() {
        this.doc =""// request doc
    }

    setDoc(doc) {
        this.doc = doc
    }
    getDoc() {
        return this.doc
    }
}
setWorldConstructor(World);
