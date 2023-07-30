<script setup>
import { defineProps } from 'vue'
import {RouterLink} from 'vue-router'
defineProps({
    course:Object
})
</script>
<template>
   <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
    <div class="course-item">
      <img :src="course.photo" class="img-fluid" alt="...">
      <div class="course-content">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h4>{{ course.category }}</h4>
          <p class="price">{{ course.price }}</p>
        </div>

        <h3><RouterLink :to="{name:'courseDetails', params:{id:course.id}}">{{ course.name }}</RouterLink></h3>
        <p>{{ course.short_description }}</p>
        <div class="trainer d-flex justify-content-between align-items-center">
          <div class="trainer-profile d-flex align-items-center">
            <img :src="course.trainer.photo" class="img-fluid" alt="">
            <span>{{ course.trainer.name }}</span>
          </div>
          <div class="trainer-rank d-flex align-items-center">
            <i class="bx bx-user"></i>&nbsp;{{ course.trainer.followers }}
            &nbsp;&nbsp;
            <i class="bx bx-heart"></i>&nbsp;{{ course.trainer.likes }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>