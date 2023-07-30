import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/HomeView.vue')
const About = () => import('../views/AboutView.vue')
const Courses = () => import('../views/CoursesView.vue')
const Trainers = () => import('../views/TrainersView.vue')
const Events = () => import('../views/EventsView.vue')
const Pricing = () => import('../views/PricingView.vue')
const Contact = () => import('../views/ContactView.vue')
const NotFound = () => import('../views/NotFound.vue')
const CourseDetails = () => import('../views/CourseDetails.vue')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses
    },
    {
      path: '/courses/:id',
      name: 'courseDetails',
      component: CourseDetails,
      props:true
    },
    {
      path: '/trainers',
      name: 'trainers',
      component: Trainers
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component:NotFound
    }
  ]
})

export default router
