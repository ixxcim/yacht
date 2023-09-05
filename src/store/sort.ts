import { defineStore } from 'pinia';

export interface IMarketState {
    fruitList: [];
}

export const useSort = defineStore('sort', {
    state(): IMarketState {
        return {
            fruitList: []
        };
    },
    actions: {
        async getList() {
            // const data = await sortBy();
            // this.fruitList = data;
        }
    }
});
