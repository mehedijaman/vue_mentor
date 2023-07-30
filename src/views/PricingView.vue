<script setup>
  import {ref, reactive, onMounted} from 'vue'
  import PricingCard from '../components/PricingCard.vue'

  let pricing = reactive([])
  let isLoading = ref(true)
  const apiURL = 'http://localhost:3000/pricing'

  onMounted(async()=>{
    try{
      fetch(apiURL)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        pricing = data
        isLoading.value = false
      })
    }catch(error){
      console.log('Error Fetching Data: ',  error)
      isLoading.value=false
    }
  })
</script>
  
<template>
  <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs" data-aos="fade-in">
      <div class="container">
        <h2>Pricing</h2>
        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.</p>
      </div>
    </div><!-- End Breadcrumbs -->

    <!-- ======= Pricing Section ======= -->
    <section id="pricing" class="pricing">
      <div class="container" data-aos="fade-up">
        <div class="row" v-if="isLoading">
          <h1>Loading...</h1>
        </div>

        <div class="row" v-if="!isLoading">
          <PricingCard v-for="(plan,index) in pricing" :key="index" :plan="plan"/>          
        </div>

      </div>
    </section><!-- End Pricing Section -->

  </main><!-- End #main -->  
  
</template>