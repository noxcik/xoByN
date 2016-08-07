function init(){
	var canvas = document.getElementById('game');
	var stage = new createjs.Stage('game');
	var cw = canvas.width = window.innerWidth - 20;
	var ch = canvas.height = window.innerHeight - 20;
	var win = false;
	var gameBot = false, poleSize = 3, playerChar = "x", enemyChar = "o"; 
	function start(){
		var whitePoleBackground = new createjs.Shape();
		whitePoleBackground.graphics.drawRect(0, 0, cw, ch);
		whitePoleBackground.x = 0;
		whitePoleBackground.y = 0;
		stage.addChild(whitePoleBackground);
		function reChild(char){
			if(char == "x"){
				playerChar = "x";
				enemyChar = "o";
				selectX.alpha = 1;
				select0.font = "40px Arial"
				selectX.color = "deepSkyBlue";
				select0.color = "black";
				selectX.font = "60px Arial";
				select0.alpha = 0.6;
			}
			if(char == "o"){
				playerChar = "o";
				enemyChar = "x";
				select0.alpha = 1;
				selectX.color = "black";
				select0.color = "deepSkyBlue";				
				selectX.font = "40px Arial"
				select0.font = "60px Arial";
				selectX.alpha = 0.6;
			}
			console.log("playerChar", playerChar)
			stage.update();
		}
		function reRect(Size){
			if(Size == 3){
				poleSize = 3;
				arrB[0].alpha = 1;
				arrB[0].color = "orange";
				arrB[1].alpha = 0.2;
				arrB[1].color = "black";
				arrB[2].alpha = 0.2;
				arrB[2].color = "black";	
				arrB[3].color = "black";
				arrB[3].alpha = 0.2		
				arrB[3].text = "?";					
				stage.update();
			}
			else if(Size == 5){
				poleSize = 5;
				arrB[1].alpha = 1;
				arrB[1].color = "orange";
				arrB[0].alpha = 0.2;
				arrB[0].color = "black";
				arrB[2].alpha = 0.2;
				arrB[2].color = "black";	
				arrB[3].color = "black";
				arrB[3].alpha = 0.2		
				arrB[3].text = "?";				
				stage.update();
			}
			else if(Size == 8){
				poleSize = 8;
				arrB[2].alpha = 1;
				arrB[2].color = "orange";
				arrB[1].alpha = 0.2;
				arrB[1].color = "black";
				arrB[0].alpha = 0.2;
				arrB[0].color = "black";	
				arrB[3].color = "black";
				arrB[3].text = "?";		
				arrB[3].alpha = 0.2					
				stage.update();
			}
			else if(Size == "?"){
				poleSize = Math.floor(prompt("введите свой вариант:"));
				console.log("type:", typeof poleSize);
				if(poleSize > 100 || poleSize < 3) reRect("?");
				if(isNaN(poleSize) == true)reRect("?");
				arrB[3].alpha = 1;
				arrB[3].color = "blue";
				arrB[1].alpha = 0.2;
				arrB[1].color = "black";
				arrB[0].alpha = 0.2;
				arrB[0].color = "black";
				arrB[2].alpha = 0.2;
				arrB[2].color = "black";	
				arrB[3].text = poleSize;
				if(poleSize == 3) reRect(3);
				if(poleSize == 5) reRect(5);
				if(poleSize == 8) reRect(8);
				stage.update();				
			}
			else{
				arrB[3].alpha = 1;
				arrB[3].color = "blue";
				arrB[1].alpha = 0.2;
				arrB[1].color = "black";
				arrB[0].alpha = 0.2;
				arrB[0].color = "black";
				arrB[2].alpha = 0.2;
				arrB[2].color = "black";	
				arrB[3].text = poleSize;	
				stage.update();	
			}
			console.log(poleSize);			
		}
		
		textBot = new createjs.Text();
		textBot.text = "игра с ботом";
		textBot.font = "40px Arial";
		textBot.x = cw / 8;
		textBot.y = ch / 8;
		textBot.alpha = 0.4;
		var hitTextBot = new createjs.Shape();
		hitTextBot.graphics.beginFill("#000").drawRect(0, 0, textBot.getMeasuredWidth(), textBot.getMeasuredHeight());
		textBot.hitArea = hitTextBot;

		textBot.on("click", function(){
			if(gameBot == false){
				gameBot = true;
				textBot.alpha = 1;
				textBot.color = "green";
				stage.update();
			}
			else if(gameBot == true){
				gameBot = false;
				textBot.alpha = 0.4;
				textBot.color = "black";
				stage.update();				
			}
			console.log("gameBot:", gameBot);			
		})
		var arrB = [4];
		var hit = [4];
		for(var i = 3; i >= 0; i--){
			arrB[i] = new createjs.Text();
			arrB[i].font = "40px Arial";
			if(i == 0){arrB[i].text = "3"; }
			if(i == 1){arrB[i].text = "5"; }
			if(i == 2){arrB[i].text = "8"; }
			if(i == 3){arrB[i].text = "?"; }
			arrB[i].alpha = 0.2;
			arrB[i].y = ch / 8;
			arrB[i].x = cw - (cw/3) / 4 * (4 - i);
			hit[i] = new createjs.Shape();
			hit[i].graphics.beginFill("#000").drawRect(0, 0, arrB[i].getMeasuredWidth(), arrB[i].getMeasuredHeight());
			arrB[i].hitArea = hit[i];
			stage.addChild(arrB[i]);
		}
		arrB[0].on("click", function(){ reRect(3)});
		arrB[1].on("click", function(){ reRect(5)});
		arrB[2].on("click", function(){ reRect(8)});
		arrB[3].on("click", function(){ reRect("?")});


		var selectX = new createjs.Text();
		selectX.text = "крестик";
		selectX.font = "40px Arial";
		selectX.alpha = 0.6;
		selectX.x = cw / 6;
		selectX.y = ch / 2 - 100;
		hitSX = new createjs.Shape();
		hitSX.graphics.beginFill("#000").drawRect(0, 0, selectX.getMeasuredWidth(), selectX.getMeasuredHeight());
		selectX.hitArea = hitSX;
		selectX.on("click", function(){reChild("x")});
		var select0 = new createjs.Text("нолик", "40px Arial");
		select0.alpha = 0.6;
		select0.x = cw - cw / 3;
		select0.y = selectX.y;
		selectX.y = ch / 2 - 100;
		hitS0 = new createjs.Shape();
		hitS0.graphics.beginFill("#000").drawRect(0, 0, select0.getMeasuredWidth(), select0.getMeasuredHeight());
		select0.hitArea = hitS0;		
		select0.on("click", function(){reChild("o")});
		var buttonStart = new createjs.Shape();
		buttonStart.graphics.beginStroke("#000").f("yellow").drawRoundRect(0, 0, 200, 60, 10);
		buttonStart.x = cw / 2 - 100;
		buttonStart.y = ch - 200;
		textStart = new createjs.Text();
		textStart.text = "START"
		textStart.font = "40px Arial";
		textStart.y = ch - 195;
		textStart.textAlign = "center";		
		textStart.x = cw / 2;
		stage.addChild(textBot, selectX, select0, buttonStart, textStart);
		buttonStart.on("click", function(){
			stage.removeChild(textBot, selectX, select0, buttonStart, textStart, whitePoleBackground);
			for(var i = 0; i < 4; i++){
				stage.removeChild(arrB[i]);
			}			
			stage.update();
			game();
		})
		if(gameBot == false){
				gameBot = false;
				textBot.alpha = 0.4;
				textBot.color = "black";
				stage.update();	
		}
		else if(gameBot == true){
				gameBot = true;
				textBot.alpha = 1;
				textBot.color = "green";
				stage.update();			
		}
		reRect(poleSize);
		reChild(playerChar);
		stage.update();

	}
	function game(){
		var xod = true;
		var l = new createjs.Shape();
		function randomInt(min, max){//функция определения случайного числа
       		return Math.floor(Math.random() * (max - min + 1) + min);
    	}	
    	function AI(){
    		xod = true;
    		var I = randomInt(0, poleSize - 1), J = randomInt(0, poleSize - 1);
    		if(kChar[I][J] != "_"){
    			AI();
    			return 0;
    		}
    		var X = k[I][J].x, Y = k[I][J].y;
    		stage.removeChild(k[I][J]);
    		if(enemyChar == "o"){
				k[I][J] = new createjs.Bitmap("O.png");
				kChar[I][J] = "o";
    		}
    		if(enemyChar == "x"){
				k[I][J] = new createjs.Bitmap("X.png");
				kChar[I][J] = "x";
    		}
    		k[I][J].x = X ;
			k[I][J].y = Y ;
			k[I][J].scaleX = (kletkaSize - 1)  / 100;
			k[I][J].scaleY = (kletkaSize - 1) / 100;
			stage.addChild(k[I][J]);
			stage.update();
			winLose();
			proverka();
    	}
    	function line(i1, j1, i2, j2){
    		var sSS = kletkaSize / 5;
    		var X1 = k[i1][j1].x + kletkaSize / 2, Y1 = k[i1][j1].y + kletkaSize / 2;
    		var X2 = k[i2][j2].x + kletkaSize / 2, Y2 = k[i2][j2].y + kletkaSize / 2;
    		l.graphics.beginStroke("deepSkyBlue").setStrokeStyle(sSS);
    		l.graphics
    		.moveTo(X1, Y1)
    		.lineTo(X2, Y2);
    		stage.addChild(l);
    		stage.update();
    	}
		function winer(char){
			if(char == "x" || char == "o") alert(char, "победил");
			else alert("ничья");
			stage.removeChild(pole, l);
			nXod = 0;
			for(var i = 0; i < poleSize; i++){
				for(var j = 0; j < poleSize; j++){
					stage.removeChild(k[i][j]);
					kChar[i][j] = "_";
				}
			}	
			stage.update();	
			start();	
			return true;
		}
		function dt(t){
			if(t == "x")
				return "o";
			if(t == "o")
				return "x";
		}
		function proverka(){
			var l = 0;
			t = "_"
			for(var i = 0; i < poleSize; i++){
				if(t == "_"){
					if(kChar[i][poleSize - 1 - i] != "_"){
						t = kChar[i][poleSize - 1 - i];
						d = dt(t);
					} 
				}
				else if(kChar[i][poleSize - 1 - i] == d){
						l ++;
						break;
					}	
			}
			t = "_"
			for(var i = 0; i < poleSize; i++){
				if(t == "_"){
					if(kChar[i][i] != "_"){
						t = kChar[i][i];
							d = dt(t);
					}
				}
				else if(kChar[i][i] == d){
					l++;
					break;
				}
			
			}	
			for(var i = 0; i < poleSize; i++){
				t = "_"
				for(var j = 0; j < poleSize; j++){
					if(t == "_"){
						if(kChar[i][j] != "_"){
							t = kChar[i][j];
								d = dt(t);
						}
					}
					else if(kChar[i][j] == d){
						l++;
						break;
					}
				}
			}
			for(var j = 0; j < poleSize; j++){
				t = "_";
				for(var i = 0; i < poleSize; i++){
					if(t == "_"){
						if(kChar[i][j] != "_"){
							t = kChar[i][j];
								d = dt(t);
						}
					}
					else if(kChar[i][j] == d){
						l++;
						break;
					}			
				}
			}
			if(l == poleSize * 2 + 2)
				winer();



			t = 0;
			for (var i = 0; i < poleSize; i++){
				for (var j = 0; j < poleSize; j++) {
					if(kChar[i][j] == "_")
						t++;
				}
			}
			if(t > 0)
				return 0;
			else if(t == 0)
				winer();
		}
		function winLose(){	
			t = kChar[0][poleSize - 1];
			g = 0;
			for(var i = 0; i < poleSize; i++){
				if(kChar[i][poleSize - 1 - i] == t && kChar[i][poleSize - 1 - i] != "_")
					g++;
				if(g == poleSize){
					line(poleSize - 1, 0, 0, poleSize - 1);
					winer(t);
					return true;
				}
			}

			var t = kChar[0][0];
			var g = 0;
			for(var i = 0; i < poleSize; i++){
				if(kChar[i][i] == t && kChar[i][i] != "_")
					g++;
				if(g == poleSize){
					line(0, 0, poleSize - 1, poleSize - 1);
					winer(t);
					return true;
				}

			}
			for(var i = 0; i < poleSize; i++){
				t = kChar[i][0];
				g = 0;
				for(var j = 0; j < poleSize; j++){
					if(kChar[i][j] == t && kChar[i][j] != "_")
						g++;
					if(g == poleSize){
						line(i, 0, i, poleSize - 1)
						winer(t);
						return true;
					}
				}
			}
			for(var j = 0; j < poleSize; j++){
				t = kChar[0][j];
				g = 0;
				for(var i = 0; i < poleSize; i++){
					if(kChar[i][j] == t && kChar[i][j] != "_")
						g++;
					if(g == poleSize){
						line(0, j, poleSize - 1, j)
						winer(t);
						return true;
					}
				}				
			}
		}	
		function playOne(i, j){
			if(kChar[i][j] == "_"){
				if(kChar[i][j] == "x" || kChar[i][j] == "o")
					return 0;
				var X = k[i][j].x, Y = k[i][j].y;
				stage.removeChild(k[i][j]);
				if(nXod % 2 == 1){
					k[i][j] = new createjs.Bitmap("X.png");
					kChar[i][j] = "x";
				}
				if(nXod % 2 == 0){
					k[i][j] = new createjs.Bitmap("O.png");
					kChar[i][j] = "o";
				}
				k[i][j].x = X ;
				k[i][j].y = Y ;
				k[i][j].scaleX = (kletkaSize - 1)  / 100;
				k[i][j].scaleY = (kletkaSize - 1) / 100;
				stage.addChild(k[i][j]);
				stage.update();
				if (winLose()) return;
				else proverka();
			}
			else{
				console.log("клетка занята");
			}
		}
		function playTwo(i, j){
			if(xod == true){
				var X = k[i][j].x, Y = k[i][j].y;
	    		stage.removeChild(k[i][j]);
	    		xod = false;
	    		if(playerChar == "o"){
					k[i][j] = new createjs.Bitmap("O.png");
					kChar[i][j] = "o";
				}
				if(playerChar == "x"){
					k[i][j] = new createjs.Bitmap("X.png");
					kChar[i][j] = "x";
				}	
		    	k[i][j].x = X ;
				k[i][j].y = Y ;
				k[i][j].scaleX = (kletkaSize - 1)  / 100;
				k[i][j].scaleY = (kletkaSize - 1) / 100;
				stage.addChild(k[i][j]);
				stage.update();
				var gg = winLose();
				if (gg) return;
				else {
					proverka();
					setTimeout(AI, 200);
				}
			}	
		}

		var k = [poleSize], kChar = [poleSize];
		if(ch <= cw) var kletkaSize = (ch - 40) / poleSize;
		if(cw < ch) var kletkaSize = (cw - 40) / poleSize;
		var startX = cw / 2 - (ch - 40) / 2;
		var startY = 20, nXod = 0;
		var pole = new createjs.Shape();
		pole.graphics.beginStroke("#000").f("#000").drawRect(0, 0, ch - 40 + 1, ch - 40);
		pole.x = startX - 1; 
		pole.y = startY;
		stage.addChild(pole);
		var X = startX, Y = startY;
		for(var i = 0; i < poleSize; i++){
			k[i] = [poleSize];
			kChar[i] = [poleSize];
			for(var j = 0; j < poleSize; j++){
				kChar[i][j] = "_";
				k[i][j] = new createjs.Shape();
				k[i][j].graphics.beginStroke("#000").f("white").drawRect(0, 0, kletkaSize - 1, kletkaSize - 1);
				k[i][j].x = X;
				k[i][j].y = Y;
				k[i][j].id = i * poleSize + j;
				X += kletkaSize;
				stage.addChild(k[i][j]);
				k[i][j].on("click", function(e){
						var I = Math.floor(e.target.id / poleSize), J = e.target.id % poleSize;
						nXod++;
						if(gameBot == true){
							playTwo(I, J);
						}
						if(gameBot == false){
							playOne(I, J);
						}					
				})
			}
			Y += kletkaSize;
			X = startX;
		}
		if(gameBot == true && enemyChar == "x")
			AI();		
		stage.update();
	}
	start();

}
