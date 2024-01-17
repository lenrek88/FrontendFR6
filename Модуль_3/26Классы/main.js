class Storage {
    constructor(name, value, storage) {
        this.name = name;
        this.storageName = storage ?? 'localStorage';
        if (this.storageName === 'localStorage') {
            localStorage.setItem(name, value);
        } else if(this.storageName === 'sessionStorage') {
            sessionStorage.setItem(name, value);
        }
    }

    get() {
        console.log(this.storageName)
        if (this.storageName === 'localStorage') {
            return localStorage.getItem(this.name);
        } else if(this.storageName === 'sessionStorage') {
            return sessionStorage.getItem(this.name);
        }
    }

    set(value) {
        if (this.storageName === 'localStorage') {
            localStorage.setItem(this.name, value);
        } else if(this.storageName === 'sessionStorage') {
            sessionStorage.setItem(this.name, value);
        }
    }

    clear() {
        if (this.storageName === 'localStorage') {
            localStorage.removeItem(this.name);
        } else if(this.storageName === 'sessionStorage') {
            sessionStorage.removeItem(this.name);
        }
        
    }

    isEmpty() {
       
        if (localStorage.getItem(this.name) === null || undefined) {
            return true;
        } else {
            return false;
        }
    }


}



const names = new Storage(`names`);
console.log(names.get())

names.set('Hi ^-^') 
console.log(names.isEmpty()) 

console.log(names.get())

// names.clear() 
// console.log(names.isEmpty()) 
// console.log(names.get())


const surName = new Storage(`surName`);
console.log(surName.get());

surName.set('Moon') ;
console.log(surName.isEmpty()) ;

console.log(surName.get());

console.log(names.get());
surName.clear() ;
console.log(surName.isEmpty());
console.log(surName.get());

console.log("---------------------------");

const hz = new Storage('hz', 'qq', 'sessionStorage');
hz.set('Session storage?');
console.log(hz.get());

