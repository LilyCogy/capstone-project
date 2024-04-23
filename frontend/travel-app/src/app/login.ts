export class Login {        // this class must be map to entity class and entity class map to table. 
    constructor(
        public emailid:string,
        public password:string,
        public typeofuser:string){}
    
}