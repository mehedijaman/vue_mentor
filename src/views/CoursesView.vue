<script setup>
import {ref, reactive, onMounted} from 'vue'

import CourseCard from '../components/CourseCard.vue';

let courses = ref('')
const apiURL = 'http://localhost:3000/courses'

onMounted(async () =>{
  await fetch(apiURL)
  .then(response => response.json())
  .then((data) => {
    courses.value = data
  })
})
</script>
<template>
  <main id="main" data-aos="fade-in">

    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs">
      <div class="container">
        <h2>Courses</h2>
        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.</p>
      </div>
    </div><!-- End Breadcrumbs -->

    <!-- ======= Courses Section ======= -->
    <section id="courses" class="courses">
      <div class="container" data-aos="fade-up">
        <div class="row" data-aos="zoom-in" data-aos-delay="100">
          <CourseCard v-for="(course, index) in courses" :key="index" :course="course"/>
        </div>
      </div>
    </section><!-- End Courses Section -->

  </main><!-- End #main -->
    
  
</template>