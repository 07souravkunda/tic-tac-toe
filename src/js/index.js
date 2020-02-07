import Play from '../model/Play';
import * as playView from '../view/playView';


const state = {
    activePlayer : [],
    active : 0,
    move : 0,
    gamePlay : true
};
document.querySelector('.game--area').addEventListener('click',e => {
    const query = e.target;
    if(query.id && state.gamePlay){
    playView.renderView(query.id,state.active);
    if(!state.activePlayer[state.active]){
        state.activePlayer[state.active] = new Play();
    }
    state.move ++ ;
    const idString = query.id;
    const idArr = idString.split('_');
    const id = parseInt(idArr[1],10);
    state.activePlayer[state.active].updateId(id);
    const l = state.activePlayer[state.active].findWinner(state.active);
    if(l){
        playView.renderLine(l);
        state.winner = state.active;
        setTimeout(() => {
            playView.renderWinner(state.active);
        },500);
        
        state.gamePlay = false;
    }
    if(state.active == 0) state.active = 1;
    else state.active = 0;
    if(state.move>=9){
        state.gamePlay = false;
        setTimeout(() => {
            playView.renderWinner(-1);
        },500);
        
    }
    
    
    
}
});

document.querySelector('.wrapper').addEventListener('click',e => {
    if(e.target.matches('.playagain_btn , .playagain_btn *' )){
        playView.initUI();
        init();
        
    }
});

const init = () => {
    state.move = 0;
    state.gamePlay = true;
    state.active = 0;
    state.activePlayer = [] ;
}



