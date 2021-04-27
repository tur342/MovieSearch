<template>
    <div>
        <v-text-field
            v-model="title"
            outlined>
            <template v-slot:prepend-inner>
                <v-icon>search</v-icon>
            </template>
        </v-text-field>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                title: ''
            }
        }
    }
</script>