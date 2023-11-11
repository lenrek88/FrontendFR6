const phoneBook = {
    list: {
        "Maria": 8987343244,
        "Anatolii": 89324321132,
        "Gena Bukin": 89113249999
    },
    add(name,number) {
        this.list[name] = number;
    },
    delete(name) {
        delete this.list[name];
    },
    log() {
        console.log(this.list)
    }
    

}


phoneBook.delete("Gena Bukin")

phoneBook.add("Danil", 89883893788);

phoneBook.log();


for (const name in phoneBook.list) {
    console.log(name, " - " ,phoneBook.list[name]);
}
