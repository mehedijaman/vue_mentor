<script setup>
import {ref, reactive, onMounted} from 'vue'
import TrainerCard from '../components/TrainerCard.vue'

const apiURL = 'http://localhost:3000/trainers'
let trainers = reactive({})
let isLoading = ref(true)

onMounted(async () => {
  try {
    await fetch(apiURL)
    .then(Response => Response.json())
    .then((data) => {
      trainers = data
      isLoading.value = false
      // console.log(trainers)
    })
  } catch (error) {
    console.log("Error fetching data:", error)
    isLoading.value = false
  }
})

</script>
<template>
  <main id="main" data-aos="fade-in">

    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs">
      <div class="container">
        <h2>Trainers</h2>
        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
      </div>
    </div><!-- End Breadcrumbs -->

    <!-- ======= Trainers Section ======= -->
    <section id="trainers" class="trainers">
      <div class="container" data-aos="fade-up">

        <div class="row" data-aos="zoom-in" data-aos-delay="100">
          <div v-for="(trainer, index ) in trainers" :key="index" class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
                <img :src="trainer.photo" class="img-fluid" alt="">
                <div class="member-content">
                <h4>{{ trainer.name }}</h4>
                <span>{{ trainer.subject }}</span>
                <p>{{ trainer.bio }} </p>
                <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
                </div>
            </div>
        </div>
        </div>

      </div>
    </section><!-- End Trainers Section -->

  </main><!-- End #main -->
</template>