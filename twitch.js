var peanut = [];

var stock = ["ESL_SC2", 
"OgamingSC2", "cretetion",
 "freecodecamp", "storbeck",
  "habathcx", "RobotCaleb",
   "noobs2ninjas", "brunofin"];

var done = [];

var holding = [

];

var work = [];

ego();
inception();

function ego(){
$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/freecodecamp", function(data){
	holding.push(data);
});

$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2", function(data){
	holding.push(data);
});

$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/OgamingSC2", function(data){
	holding.push(data);
});

$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/cretetion", function(data){
	holding.push(data);
});

$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/storbeck", function(data){
	holding.push(data);
});

$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/habathcx", function(data){
	holding.push(data);
});

$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/RobotCaleb", function(data){
	holding.push(data);
});

$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/noobs2ninjas", function(data){
	holding.push(data);
});

$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/brunofin", function(data){
	holding.push(data);

});
$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/archwizardcj", function(data){

for(var x = 0; x < holding.length; x++){
	if(holding[x].stream === null){
	
	
	}

	else{
	work.push(holding[x]);
	}
}

online();

});

}

function inception(){
$.getJSON("https://wind-bow.gomix.me/twitch-api/channels/freecodecamp", function(data){
	peanut.push(data);
});

$.getJSON("https://wind-bow.gomix.me/twitch-api/channels/ESL_SC2", function(data){
	peanut.push(data);
});

$.getJSON("https://wind-bow.gomix.me/twitch-api/channels/OgamingSC2", function(data){
	peanut.push(data);
});

$.getJSON("https://wind-bow.gomix.me/twitch-api/channels/cretetion", function(data){
	peanut.push(data);
});

$.getJSON("https://wind-bow.gomix.me/twitch-api/channels/habathcx", function(data){
	peanut.push(data);
});

$.getJSON("https://wind-bow.gomix.me/twitch-api/channels/RobotCaleb", function(data){
	peanut.push(data);
});

$.getJSON("https://wind-bow.gomix.me/twitch-api/channels/noobs2ninjas", function(data){
	peanut.push(data);
});

$.getJSON("https://wind-bow.gomix.me/twitch-api/channels/brunofin", function(data){
	peanut.push(data);

});
$.getJSON("https://wind-bow.gomix.me/twitch-api/channels/archwizardcj", function(data){

offline();
		
});

}

function online(){
	for(var z = 0; z < work.length; z++){
		$(".online").append("<a href='" + work[z].stream.channel.url + "'><img src='" + work[z].stream.channel.logo + "'> "  + work[z].stream.channel.display_name + "</a>");
		$(".online img").addClass('img');
	
		$("<span> Status: " + work[z].stream.channel.status + "</span>").appendTo(".online a");
	

		
	}


}

function offline(){
	for(var t = 0; t < peanut.length; t++){
		if(peanut[t].status === 404){
			$('.offline').append("<a>404: " + peanut[t].message + "</a>");
		
		}
		else{
				
				$(".offline").append("<a href='" + peanut[t].url +"'><img src='" + peanut[t].logo + "'> " + peanut[t].display_name + "</a>");
				$(".offline img").addClass('img');
			
		}
		
		}
	
	var seen = {};
				
	$('a').each(function() {
    				
  var txt = $(this).attr("href");
    					
   if (seen[txt])
   $(this).remove();
    							
    else
    seen[txt] = true;

});


 var as = $('.offline a');
for(var v = 0; v < as.length; v++){
	$('<span> Status: Offline</span>').appendTo(as[v]);

}

}


