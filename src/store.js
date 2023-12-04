import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://futdb.app/api/',
    axiosHeaders: {
        headers: { 'X-AUTH-TOKEN': import.meta.env.VITE_FUT_API_KEY }
    }
});