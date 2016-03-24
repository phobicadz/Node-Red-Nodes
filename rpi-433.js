
module.exports = function(RED) {
    
    var rpi = require('rpi-433');
    
    function sendCode(config)
    {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            
	    rfSend = rpi.sendCode;

        var returnMessage;
           
	rfSend(msg.payload, 2, function(error, stdout) {   //Send 1234 
  		node.send(stdout); //Should display 1234
        msg.payload = stdout;
		console.log(stdout);
    });
          
        //   node.send(returnMessage);
      });
    }
    
    RED.nodes.registerType('rpi433',sendCode);
}