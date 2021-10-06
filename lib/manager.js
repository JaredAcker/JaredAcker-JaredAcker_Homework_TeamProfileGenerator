
class Manager {
    constructor(name, id, email, officeNumber){
        super([name, id, email])
        this.officeNumber = officeNumber;
        this.type = 'Manager';
    };
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
        getType(){
        return "Manager";
    }
}

module.exports = Manager;