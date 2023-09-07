import { defineStore } from 'pinia';

interface IState {
    queryParams: object;
    filteredItem: number;
}

export const useFilter = defineStore('filter', {
    state(): IState {
        return {
            queryParams: [],
            filteredItem: 0
        };
    },
    getters: {
        getQueryParams: (state) => state.queryParams,
        getFilteredItem: (state) => state.filteredItem
    },
    actions: {
        setQueryParams(value: any) {
            return (this.queryParams = value);
        },
        setFilteredItem(value: any) {
            return (this.filteredItem = value);
        }
    }
});
