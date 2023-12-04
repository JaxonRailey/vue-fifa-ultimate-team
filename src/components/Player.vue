<template>
    <div class="card" @click="open">
        <div class="background">
            <div class="name"><span>{{ player.lastName }}</span></div>
            <div class="statistics">
                <div class="column">
                    <span>
                        <div class="value">{{ player.pace }}</div>
                        <div class="title">PAC</div>
                    </span>
                    <span>
                        <div class="value">{{ player.shooting }}</div>
                        <div class="title">SHO</div>
                    </span>
                    <span>
                        <div class="value">{{ player.passing }}</div>
                        <div class="title">PAS</div>
                    </span>
                </div>
                <div class="column">
                    <span>
                        <div class="value">{{ player.dribbling }}</div>
                        <div class="title">DRI</div>
                    </span>
                    <span>
                        <div class="value">{{ player.defending }}</div>
                        <div class="title">DEF</div>
                    </span>
                    <span>
                        <div class="value">{{ player.physicality }}</div>
                        <div class="title">PHY</div>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { store } from './../store.js';

    export default {
        props: {
            player: Object
        },
        data() {
            return {
                store
            }
        },
        methods: {
            open() {
                this.store.playerId = this.player.id;
                this.$emit('openModal');
            }
        }
    }

</script>