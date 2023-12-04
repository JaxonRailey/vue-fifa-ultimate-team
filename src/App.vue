<template>
    <div class="players">
        <Player v-for="(player, index) in players" :key="index" :player="player" @openModal="handleOpenModal" />
    </div>
    <button @click="loadMore">Carica altri giocatori</button>
    <Sidebar :player="activePlayer" />
</template>

<script>

    import { store } from './store.js';
    import axios from 'axios';
    import Player from './components/Player.vue';
    import Sidebar from './components/Sidebar.vue';

    export default {
        data() {
            return {
                store,
                page: 1,
                players: [],
                activePlayer: null
            };
        },
        components: { Player, Sidebar },
        methods: {
            getPlayers() {
                axios.get(`${this.store.apiUrl}players?page=${this.page}`, this.store.axiosHeaders).then(response => {
                    this.players = [...this.players, ...response.data.items];
                });
            },
            handleOpenModal() {
                axios.get(`${this.store.apiUrl}players/${this.store.playerId}`, this.store.axiosHeaders).then((response) => {
                    this.activePlayer = response.data.player;
                });
            },
            loadMore() {
                this.page++;
                this.getPlayers();
            }
        },
        created() {
            this.getPlayers();
        }
    };

</script>