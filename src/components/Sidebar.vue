<template>
    <div class="sidebar" :class="{ 'is-hidden' : !player }">
        <div class="item" v-if="player && player.lastName">
            <h2>{{ player.lastName }}</h2>
        </div>
        <div class="item" v-if="player && player.firstName">
            <span>Nome</span><span>{{ player.firstName }}</span>
        </div>
        <div class="item" v-if="player && player.lastName">
            <span>Cognome</span><span>{{ player.lastName }}</span>
        </div>
        <div class="item" v-if="player && player.height">
            <span>Altezza</span><span>{{ player.height }}</span>
        </div>
        <div class="item" v-if="player && player.weight">
            <span>Peso</span><span>{{ player.weight }}</span>
        </div>
        <div class="item" v-if="player && player.birthDate">
            <span>Data di nascita</span><span>{{ player.birthDate }}</span>
        </div>
        <div class="item" v-if="player && player.pace">
            <span>Velocità</span><span>{{ player.pace }}</span>
        </div>
        <div class="item" v-if="player && player.shooting">
            <span>Tiro</span><span>{{ player.shooting }}</span>
        </div>
        <div class="item" v-if="player && player.passing">
            <span>Passaggio</span><span>{{ player.passing }}</span>
        </div>
        <div class="item" v-if="player && player.dribbling">
            <span>Dribbling</span><span>{{ player.dribbling }}</span>
        </div>
        <div class="item" v-if="player && player.defending">
            <span>Difesa</span><span>{{ player.defending }}</span>
        </div>
        <div class="item" v-if="player && player.physicality">
            <span>Fisico</span><span>{{ player.physicality }}</span>
        </div>
    </div>

    <div class="overlay" :class="{ 'is-hidden' : !player }" @click="player = null"></div>
</template>

<script>

    export default {
        props: {
            player: Object
        }
    }

</script>