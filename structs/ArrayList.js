export class ArrayList {
    constructor(){
        this.len = 0;
        this.data = {};
    }
    push(value){
        this.data.push[len++] = value;
        return {...this.data};
    }
    delete (index) {
        this.data[index] = null;
        this.data.len--;
        return {...this.data};
    }
    get(index) {
        return this.data[index];
    }
    update (index, value){
        this.data[index] = value;
        return {...this.data};
    }
}