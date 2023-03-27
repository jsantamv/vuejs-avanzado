<script setup lang="ts">
import * as signalR from "@microsoft/signalr";

// create connection
const baseUrl = 'https://localhost:7037'

const connection = new signalR.HubConnectionBuilder()
    .withUrl(`${baseUrl}/message`)
    .build()

connection.start()
    .then(() => {
        console.log('se conecto')
    })
    .catch((error) => console.error(error.message))

//para mostrar la informacion
connection.on("sendMessage", (message) => {
    console.log(message);
})

</script>

<template>
    <div>
        <h1>HomePage</h1>


        <h4>Contenido 1</h4>
        <div id="content1">

        </div>

        <h4>Contenido 2</h4>
        <div id="content2">

        </div>
    </div>
</template>


<style scoped></style>