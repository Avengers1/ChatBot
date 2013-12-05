API.chatLog("You are running ChatBot v."+version+" by Red_Epicness.")
API.on(API.CHAT, chat);
function chat(data){
	if(data.type == "message"){
		API.chatLog(data.message);
	
	}
}
var version: "0.1 BETA",