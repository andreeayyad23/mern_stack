class HashMap {
    constructor() {
        this.storage = [];
    }

    hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
           hash += key.charCodeAt(i);
        }
        return hash;
    }

    set(key, value){
        const index = this.hash(key);
        this.storage[index] = this.storage[index] || [];
        this.storage[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        const items = this.storage[index];

        if(items){
            for (let i = 0; i < items.length; i++) {
                if (items[i][0] === key) {
                    
                    return items[i][1];
                }
                
            }
            return undefined;
        }
    }

    delete(key){
        const index = this.hash(key);
        const items = this.storage[index];

        if (items) {
            for (let i = 0; i < items.length; i++) {
                if (items[i][0] === key) {
                   items.slice(i, 0);
                   return true
                }
                
            }
        }
        return false;
    }
}


const mapping = new HashMap();
mapping.set("name", "andree");
console.log(mapping.get("name"))
   console.log(mapping.delete("name"));


