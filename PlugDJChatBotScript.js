function ChatBot(){
stuff = {
    version: 1.0,
    chat: function(data){
		API.chatLog("it works!!");
	
	},
    }    
    API.on(API.CHAT, stuff.chat, this);
    API.chatLog("You are running the ChatBot v."+stuff.version+" by Red_Epicness");
}

if(typeof stuff !== "undefined") stuff.close();

ChatBot();