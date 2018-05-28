var grade = [	[0,0,0,0],
				[0,0,0,0],
				[0,0,0,0],
				[0,0,0,0]	];

var gradeant = [	[0,0,0,0],
					[0,0,0,0],
					[0,0,0,0],
					[0,0,0,0]	];

function sorteianum(){
	nextnumber = Math.floor(Math.random()*3) + 2;
	if(nextnumber==3) {
		return sorteianum();
		} else {
		return nextnumber;
		}
	}

function sorteiapos(){
	posicao = Math.floor(Math.random()*16);
	mod = Math.floor(posicao/4);
	pos=posicao%4;
	if(grade[mod][pos]!=0){
		return sorteiapos();
		} else {
		return posicao;
		}
}

function insertion(){
	sorteiapos();
	sorteianum();
	grade[mod][pos]=nextnumber
	gradeant[mod][pos]=nextnumber;
}

function exibegrade(){
	for(i=1;i<=4;i++){
		for(j=1;j<=4;j++){
			identificador='li'+i+'col'+j;
			document.getElementById(identificador).innerHTML = grade[i-1][j-1];
		}
	}
}

function buttonselect(e){
	key = e.keyCode;
    switch(key){
		case 37:
			esquerda();
			break;
		case 38:
			cima()
			break;
		case 39:
			direita()
			break
		case 40:
			baixo()
			break;
	}
}

function esquerda(){
	for(i=0;i<4;i++){
		for(j=0;j<=4;j++){
			if(grade[i][0]==0){
				grade[i][0]=grade[i][1];
				grade[i][1]=grade[i][2];
				grade[i][2]=grade[i][3];
				grade[i][3]=0;
			}
			if(grade[i][1]==0){
				grade[i][1]=grade[i][2];
				grade[i][2]=grade[i][3];
				grade[i][3]=0;
			}
			if(grade[i][2]==0){
				grade[i][2]=grade[i][3];
				grade[i][3]=0;
			}
		}
		if(grade[i][0]==grade[i][1]){
			grade[i][0]*=2;
			grade[i][1]=grade[i][2];
			grade[i][2]=grade[i][3];
			grade[i][3]=0;
			if(grade[i][1]==grade[i][2]){
				grade[i][1]*=2;
				grade[i][2]=0;
			}
		} else if(grade[i][1]==grade[i][2]){
			grade[i][1]*=2;
			grade[i][2]=grade[i][3];
			grade[i][3]=0;
		} else if(grade[i][2]==grade[i][3]){
			grade[i][2]*=2;
			grade[i][3]=0;
		}
		for(j=0;j<=4;j++){
			if(grade[i][0]==0){
				grade[i][0]=grade[i][1];
				grade[i][1]=grade[i][2];
				grade[i][2]=grade[i][3];
				grade[i][3]=0;
			}
			if(grade[i][1]==0){
				grade[i][1]=grade[i][2];
				grade[i][2]=grade[i][3];
				grade[i][3]=0;
			}
			if(grade[i][2]==0){
				grade[i][2]=grade[i][3];
				grade[i][3]=0;
			}
		}

	}
	next();
}

function cima(){
	for(j=0;j<4;j++){
		for(i=0;i<=4;i++){
			if(grade[0][j]==0){
				grade[0][j]=grade[1][j];
				grade[1][j]=grade[2][j];
				grade[2][j]=grade[3][j];
				grade[3][j]=0;
			}
			if(grade[1][j]==0){
				grade[1][j]=grade[2][j];
				grade[2][j]=grade[3][j];
				grade[3][j]=0;
			}
			if(grade[2][j]==0){
				grade[2][j]=grade[3][j];
				grade[3][j]=0;
			}
		}
		if(grade[0][j]==grade[1][j]){
			grade[0][j]*=2;
			grade[1][j]=grade[2][j];
			grade[2][j]=grade[3][j];
			grade[3][j]=0;
			if(grade[1][j]==grade[2][j]){
				grade[1][j]*=2;
				grade[2][j]=0;
			}
		} else if(grade[1][j]==grade[2][j]){
			grade[1][j]*=2;
			grade[2][j]=grade[3][j];
			grade[3][j]=0;
		} else if(grade[2][j]==grade[3][j]){
			grade[2][j]*=2;
			grade[3][j]=0;
		}
		for(i=0;i<=4;i++){
			if(grade[0][j]==0){
				grade[0][j]=grade[1][j];
				grade[1][j]=grade[2][j];
				grade[2][j]=grade[3][j];
				grade[3][j]=0;
			}
			if(grade[1][j]==0){
				grade[1][j]=grade[2][j];
				grade[2][j]=grade[3][j];
				grade[3][j]=0;
			}
			if(grade[2][j]==0){
				grade[2][j]=grade[3][j];
				grade[3][j]=0;
			}
		}
	}
	next();
}

function direita(){
	for(i=3;i>=0;i--){
		for(j=0;j<4;j++){
			if(grade[i][3]==0){
				grade[i][3]=grade[i][2];
				grade[i][2]=grade[i][1];
				grade[i][1]=grade[i][0];
				grade[i][0]=0;
			}
			if(grade[i][2]==0){
				grade[i][2]=grade[i][1];
				grade[i][1]=grade[i][0];
				grade[i][0]=0;
			}
			if(grade[i][1]==0){
				grade[i][1]=grade[i][0];
				grade[i][0]=0;
			}
		}
		if(grade[i][3]==grade[i][2]){
			grade[i][3]*=2;
			grade[i][2]=grade[i][1];
			grade[i][1]=grade[i][0];
			grade[i][0]=0;
			if(grade[i][2]==grade[i][1]){
				grade[i][2]*=2;
				grade[i][1]=0;
			}
		} else if(grade[i][2]==grade[i][1]){
			grade[i][2]*=2;
			grade[i][1]=grade[i][0];
			grade[i][0]=0;
		} else if(grade[i][1]==grade[i][0]){
			grade[i][1]*=2;
			grade[i][0]=0;
		}
		for(j=0;j<=4;j++){
			if(grade[i][3]==0){
				grade[i][3]=grade[i][2];
				grade[i][2]=grade[i][1];
				grade[i][1]=grade[i][0];
				grade[i][0]=0;
			}
			if(grade[i][2]==0){
				grade[i][2]=grade[i][1];
				grade[i][1]=grade[i][0];
				grade[i][0]=0;
			}
			if(grade[i][1]==0){
				grade[i][1]=grade[i][0];
				grade[i][0]=0;
			}
		}

	}
	next();
}

function baixo(){
	for(j=3;j>=0;j--){
		for(i=0;i<=4;i++){
			if(grade[3][j]==0){
				grade[3][j]=grade[2][j];
				grade[2][j]=grade[1][j];
				grade[1][j]=grade[0][j];
				grade[0][j]=0;
			}
			if(grade[2][j]==0){
				grade[2][j]=grade[1][j];
				grade[1][j]=grade[0][j];
				grade[0][j]=0;
			}
			if(grade[1][j]==0){
				grade[1][j]=grade[0][j];
				grade[0][j]=0;
			}
		}
		if(grade[3][j]==grade[2][j]){
			grade[3][j]*=2;
			grade[2][j]=grade[1][j];
			grade[1][j]=grade[0][j];
			grade[0][j]=0;
			if(grade[2][j]==grade[1][j]){
				grade[2][j]*=2;
				grade[1][j]=0;
			}
		} else if(grade[2][j]==grade[1][j]){
			grade[2][j]*=2;
			grade[1][j]=grade[0][j];
			grade[0][j]=0;
		} else if(grade[1][j]==grade[0][j]){
			grade[1][j]*=2;
			grade[0][j]=0;
		}
		for(i=0;i<=4;i++){
			if(grade[3][j]==0){
				grade[3][j]=grade[2][j];
				grade[2][j]=grade[1][j];
				grade[1][j]=grade[0][j];
				grade[0][j]=0;
			}
			if(grade[2][j]==0){
				grade[2][j]=grade[1][j];
				grade[1][j]=grade[0][j];
				grade[0][j]=0;
			}
			if(grade[1][j]==0){
				grade[1][j]=grade[0][j];
				grade[0][j]=0;
			}
		}
	}
	next();
}

function play(){
	insertion();
	exibegrade();
}

function next(){
	cont=0;
	for (var i = 0; i < 4; i++) {
		for(j=0;j<4;j++){
			if(grade[i][j]!=gradeant[i][j]){
				gradeant[i][j]=grade[i][j];
				cont++;
			}
		}
	}
	if(cont==0){
		return;
	} else{
		play();
	}

}

play();

document.onkeydown = buttonselect;