

export const renderView = (query,active) => {
    let markup ;
    if(active === 0){
        markup = `
                <i class = "close"><ion-icon name="close"></ion-icon></i>
        `
    }else{
        markup = `
            <i class="circle"><ion-icon name="radio-button-off"></ion-icon></i>
        `
    }
    document.getElementById(query).insertAdjacentHTML('afterbegin',markup);
};
export const renderLine = l=>{

    const markup = `
            <div class="line line_${l}"></div>
    `
    document.querySelector('.game--area').insertAdjacentHTML('beforeend',markup);
};

export const renderWinner= winner => {
    let text,img;
    if(winner === 0 ){
        text = 'player-0 is winner';
        img = 'winner_img.jpg';
    }else if(winner === 1){
        text = 'player-1 is winner';
        img = 'winner_img.jpg';
    }else{
        text = 'game is tied';
        img = 'tie_img.png';
    }
    const markup = `
        <div class="winner--area invisible">
            <img class="winner_img" src="./images/${img}" alt="winner-image">
            <div class="winner">${text}</div>
            <button class="playagain_btn"><i class="icon"><ion-icon name="refresh"></ion-icon></i>continue</button>
        </div>
    `
    document.querySelector('.game--area').insertAdjacentHTML('afterend',markup);
    document.querySelector('.winner--area').classList.remove('invisible');
    document.querySelector('.winner--area').classList.add('visible');

};

export const initUI = () => {
    const query = document.querySelector('.winner--area');
    if(query){
        query.parentElement.removeChild(query);
    }
    removeImages();
    removeLine();
};
const removeImages = () => {
    const query = document.querySelectorAll('.play--area');
    console.log(query);
    const queryArr = Array.from(query);
    console.log(queryArr);
    queryArr.forEach(el => {
        el.innerHTML = "";
    })
};

const removeLine = () => {
    const query = document.querySelector('.line');
    if(query){
        query.parentElement.removeChild(query);
    }
}
