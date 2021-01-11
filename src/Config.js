class Config {

    constructor() {
        this.Token = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
        this.Prefix = "k!";
        this.ClientID = "client-id";
        this.DBConnection = "your-mongo-link";
        
        
        // replace the directory i guess idc
        this.commandDirectory = "./commands";
       // this.moduleDirectory = "./modules";
    }
}

module.exports = Config;
