<script setup>
import { defineProps } from 'vue';
defineProps({
    plan:Object
})
</script>
<template>
    <div class="col-lg-3 col-md-6">
        <div class="box">
            <h3>{{ plan.name }}</h3>
            <h4><sup>$</sup>{{ plan.price }}<span> / month</span></h4>
            <ul>
                <li v-for="(feature, index) in plan.features" :key="index" >{{ feature.name }}</li>
            </ul>
            <div class="btn-wrap">
            <a href="#" class="btn-buy">Buy Now</a>
            </div>
        </div>
    </div>
</template>