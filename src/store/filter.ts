import { defineStore } from 'pinia';

interface IFilter {
    queryParams: object;
}

export const useFilter = defineStore('filter', {
    state(): IFilter {
        return {
            queryParams: []
        };
    },
    getters: {
        getQueryParams: (state) => state.queryParams
    },
    actions: {
        setQueryParams(value: any) {
            return (this.queryParams = value);
        }
    }
});
