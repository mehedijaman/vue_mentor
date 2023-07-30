<script setup>
import {ref, reactive, onMounted, defineProps} from 'vue'
import { useRouter } from 'vue-router'

const apiURL = 'http://localhost:3000/courses'
// let router = useRouter()
let isLoading = ref(true)
let course = reactive({})

const props = defineProps({
  id:Object
})



onMounted(async () =>{
  try{
    await fetch(`${apiURL}/${props.id}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      course.value = data
      isLoading.value = false
    })
    
  }catch(error){
    console.log('Something wrong happened: ', error)
    isLoading.value = false
  }
})
</script>
<template>
  <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs" data-aos="fade-in">
      <div class="container">
        <h2>Course Details</h2>
        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
      </div>
    </div><!-- End Breadcrumbs -->

    <!-- ======= Cource Details Section ======= -->
    <section id="course-details" class="course-details">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-8">
            <img src="assets/img/course-details.jpg" class="img-fluid" alt="">
            <h3>{{ course.name }}</h3>
            <p>{{ course.description }}</p>
          </div>
          <div class="col-lg-4">

            <div class="course-info d-flex justify-content-between align-items-center">
              <h5>Trainer</h5>
              <p><a href="#">{{ course.trainer.name }}</a></p>
            </div>

            <div class="course-info d-flex justify-content-between align-items-center">
              <h5>Course Fee</h5>
              <p>{{ course.price }}</p>
            </div>

            <div class="course-info d-flex justify-content-between align-items-center">
              <h5>Available Seats</h5>
              <p>{{ course.available_seats }}</p>
            </div>

            <div class="course-info d-flex justify-content-between align-items-center">
              <h5>Schedule</h5>
              <p>{{ course.schedule }}</p>
            </div>

          </div>
        </div>

      </div>
    </section><!-- End Cource Details Section -->

    <!-- ======= Cource Details Tabs Section ======= -->
    <section id="cource-details-tabs" class="cource-details-tabs">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-3">
            <ul class="nav nav-tabs flex-column">
              <li class="nav-item">
                <a v-for="(feature, index) in course.features" :key="index" class="nav-link show" data-bs-toggle="tab" :href="`#feature${index}`">Modi sit est</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-9 mt-4 mt-lg-0">
            <div class="tab-content">
              <div class="tab-pane active show" :id="`#feature${index}`">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>{{ feature.heading }}</h3>
                    <p>{{ feature.descriptions }}</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img :src="feature.photo" alt="" class="img-fluid">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Cource Details Tabs Section -->

  </main>
</template>