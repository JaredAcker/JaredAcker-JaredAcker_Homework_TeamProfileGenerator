class Intern {
    constructor(name, id, email, school){
        super([name, id, email])
        this.school = school;
        this.type = 'Intern';
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
    getsSchool(){
        return this.school;
    }
    getChild(){
        return "Intern";
    }
}

module.exports = Intern;