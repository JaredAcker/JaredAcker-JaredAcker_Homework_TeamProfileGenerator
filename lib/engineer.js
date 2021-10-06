
class Engineer {
    constructor(name, id, email, gitHub){
        super([name, id, email])
        this.gitHub = gitHub;
        this.form = 'Engineer';
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
    getGithub(){
        return this.gitHub;
    }
    getForm(){
        return 'Engineer';
    }
};

module.exports = Engineer;