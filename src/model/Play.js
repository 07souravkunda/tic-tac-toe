export default class Play  {
    constructor (){
        this.id = [];
    }

    findWinner (active) {
        if(this.id.includes(1) && this.id.includes(2) &&this.id.includes(3)){
            console.log(`winner is ${active}`);
            return '123';
        }else if(this.id.includes(4) && this.id.includes(5) &&this.id.includes(6)){
            console.log('winner');
            return '456';
        }else if(this.id.includes(7) && this.id.includes(8) &&this.id.includes(9)){
            console.log('winner');
            return '789';
        }else if(this.id.includes(1) && this.id.includes(4) &&this.id.includes(7)){
            console.log('winner');
            return '147';
        }else if(this.id.includes(2) && this.id.includes(5) &&this.id.includes(8)){
            console.log('winner');
            return '258';
        }else if(this.id.includes(3) && this.id.includes(6) &&this.id.includes(9)){
            console.log('winner');
            return '369';
        }else if(this.id.includes(1) && this.id.includes(5) &&this.id.includes(9)){
            console.log('winner');
            return '159';
        }else if(this.id.includes(3) && this.id.includes(5) &&this.id.includes(7)){
            console.log('winner');
            return '357';
        }
    }
    updateId(id){
        this.id.push(id);
    }
}