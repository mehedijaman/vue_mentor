<script setup></script>
<template>
     <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Mentor</h3>
            <p>
              A108 Adam Street <br>
              New York, NY 535022<br>
              United States <br><br>
              <strong>Phone:</strong> +1 5589 55488 55<br>
              <strong>Email:</strong> info@example.com<br>
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <RouterLink to="/">Home</RouterLink></li>
              <li><i class="bx bx-chevron-right"></i> <RouterLink to="/about">About</RouterLink></li>
              <li><i class="bx bx-chevron-right"></i> <RouterLink to="/services">Services</RouterLink></li>
              <li><i class="bx bx-chevron-right"></i> <RouterLink to="/terms">Terms of serviced</RouterLink></li>
              <li><i class="bx bx-chevron-right"></i> <RouterLink to="/privacy">Privacy policyd</RouterLink></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <RouterLink to="/">Web Designd</RouterLink></li>
              <li><i class="bx bx-chevron-right"></i> <RouterLink to="/">Web Developmentd</RouterLink></li>
              <li><i class="bx bx-chevron-right"></i> <RouterLink to="/">Product Managementd</RouterLink></li>
              <li><i class="bx bx-chevron-right"></i> <RouterLink to="/">Marketingd</RouterLink></li>
              <li><i class="bx bx-chevron-right"></i> <RouterLink to="/">Graphic Designd</RouterLink></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe">
            </form>
          </div>

        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>Mentor</span></strong>. All Rights Reserved
        </div>
        <div class="credits">        
          Designed by <RouterLink to="https://bootstrapmade.com/">BootstrapMaded</RouterLink>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <RouterLink to="#" class="twitter"><i class="bx bxl-twitter"></i></RouterLink>
        <RouterLink to="#" class="facebook"><i class="bx bxl-facebook"></i></RouterLink>
        <RouterLink to="#" class="instagram"><i class="bx bxl-instagram"></i></RouterLink>
        <RouterLink to="#" class="google-plus"><i class="bx bxl-skype"></i></RouterLink>
        <RouterLink to="#" class="linkedin"><i class="bx bxl-linkedin"></i></RouterLink>
      </div>
    </div>
  </footer><!-- End Footer -->
</template>