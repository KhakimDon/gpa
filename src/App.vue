<script setup>
import "./style.css";
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import { mapGetters } from "vuex";
</script>

<script>
export default {
  mounted() {},
  computed: {
    ...mapGetters(["groups"]),
  },
  data() {
    return {
      idx: 1,
      date: new Date(),
    };
  },
  methods: {
    func(item) {
      this.idx = item.id;
    },
    home(item) {
      this.$store.dispatch("HOMEWORK", [event.target.value, item, this.idx]);
    },
    classwork(item) {
      this.$store.dispatch("CLASSWORK", [event.target.value, item, this.idx]);
      if(item.gpa < 150){
        event.target.parentNode.parentNode.classList.remove("lime")
        event.target.parentNode.parentNode.classList.add("red")
      }else{
        event.target.parentNode.parentNode.classList.remove("red")
        event.target.parentNode.parentNode.classList.add("lime")
      }
    },
  },
};
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <main class="bg-[#333] h-[100vh]">
    <div class="flex justify-between p-[100px] w-[100%]">
      <div class="flex flex-col">
        <button
          @click="func(item)"
          v-for="item of this.groups"
          :key="item.id"
          class="btn mb-[20px]"
        >
          {{ item.title }}
          <span class="text-[white] bg-primary p-[10px] rounded-[20px]">{{
            item.days
          }}</span>
        </button>
      </div>
      <div class="overflow-x-auto mb-[30px] pb-[30px] border-none">
        <table
          class="table w-[1000px] mb-[30px] pb-[30px] border-none bg-[white]"
        >
          <!-- head -->
          <thead>
            <tr>
              <th class="text-[19px]"></th>
              <th class="text-[19px]">ФИО</th>
              <th class="text-[19px]">Домашнее задание</th>
              <th class="text-[19px]">Классная работа</th>
              <th class="text-[19px]">Итого</th>
              <th class="text-[19px]">
                {{ this.date.getDate() }}.{{ this.date.getMonth() + 1 }}.{{
                  this.date.getFullYear()
                }}
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr v-for="item in this.groups[this.idx].students" :key="item.id">
              <th class="">
                {{ this.groups[this.idx].students.indexOf(item) + 1 }}
              </th>
              <td class="text-[20px]">{{ item.name }}</td>
              <td class="text-[20px]">
                <select @change="home(item)">
                  <option value="0">0%</option>
                  <option value="10">10%</option>
                  <option value="20">20%</option>
                  <option value="30">30%</option>
                  <option value="40">40%</option>
                  <option value="50">50%</option>
                  <option value="60">60%</option>
                  <option value="70">70%</option>
                  <option value="80">80%</option>
                  <option value="90">90%</option>
                  <option value="100">100%</option>
                </select>
              </td>
              <td class="text-[20px]">
                <select @change="classwork(item)">
                  <option value="0">0%</option>
                  <option value="10">10%</option>
                  <option value="20">20%</option>
                  <option value="30">30%</option>
                  <option value="40">40%</option>
                  <option value="50">50%</option>
                  <option value="60">60%</option>
                  <option value="70">70%</option>
                  <option value="80">80%</option>
                  <option value="90">90%</option>
                  <option value="100">100%</option>
                </select>
              </td>
              <td class="text-[20px]">{{ item.gpa }}%</td>
              <td>
                <select>
                  <option value="">Присуствовал</option>
                  <option value="">Отсуствовал</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
.red{
  background: red;
  color: white;
}
.red select{
  background: red;
}
.lime {
  background: lime  ;
  color: white;
}
.lime  select{
  background: lime  ;
}
</style>
