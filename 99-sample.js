
module.exports = function(RED) {
    
    var ping = require('ping');
    
    function pingMeUp(config)
    {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            
            host = msg.payload;
            var returnMessage;
            
            console.log(host);
           
                ping.sys.probe(host,function(isAlive){
                    returnMessage = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead'; 
                    console.log(returnMessage);      
                    node.send(returnMessage); 
                     
                });
          
        //   node.send(returnMessage);
        });
    }
    
    RED.nodes.registerType('pingu',pingMeUp);
}