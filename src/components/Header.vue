<script setup></script>
<template>
    <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><RouterLink to="/">Mentor</RouterLink></h1>
      <!-- <RouterLink to="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></RouterLink> -->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><RouterLink class="active" to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/courses">Courses</RouterLink></li>
          <li><RouterLink to="/trainers">Trainers</RouterLink></li>
          <li><RouterLink to="/events">Events</RouterLink></li>
          <li><RouterLink to="/pricing">Pricing</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <RouterLink to="/courses" class="get-started-btn">Get Started</RouterLink>
    </div>
  </header>
</template>