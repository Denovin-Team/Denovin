<template>
  <div class="">
    <div class="bg-secondary Slider-bg w-full p-10 h-[684px] mt-[800px]   flex items-end">
      <swiper  :slidesPerView="3" :modules="modules" class="mySwiper ">
        <swiper-slide  v-for="number in num" >
          
            <div class="  bg-slate-600 w-[385px] h-[76px] rounded-3xl mr-7 "></div>
          
          <div class=" flex flex-col items-start justify-start p-3 bg-white rounded-3xl w-[438px] h-[367px] select-none -translate-y-16 
          ">

            <div class="flex">
              <img src="images/Ellipse 7.png" alt="#" class="rounded-full" />
              <div class="flex flex-col items-start w-full  mr-2">
                <h1 class=" shabnam  text-2xl">عطا حیدری</h1>
                <h2>عنوان دسته بندی</h2>
              </div>
            </div>
            <hr class="w-full mt-5">
            <div>
              <h1 class="font-bold py-5 px-3">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟
              </h1>
              <p class="px-2 pt-2">
                <span class="text-gold">پاسخ:</span>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
            </div>
          </div>
        </swiper-slide>

      </swiper>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";


const modules = [Navigation];
const num = [1,2,3,4,5] ; 
</script>
