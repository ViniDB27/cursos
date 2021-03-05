<template>
    <div id="app" >
        <h1>Calculator</h1>
        <Calculator />
    </div>
</template>

<script>
import Calculator from './main/Calculator'

export default {
    components: {Calculator},
}
</script>

<style>
 
    body {
        margin: 0;
    }

    #app{
        display: flex;
        flex-direction: column;
        height: 100vh;
        align-items: center;
        justify-content: center;

        text-align: center;

        color: #FFF;

        background: linear-gradient(90deg, #232526 0%, rgba(65, 67, 69, 0) 98.06%), rgba(35, 37, 38, 0.85);

    }

</style>