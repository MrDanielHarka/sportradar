<script setup>
import q from '../data/quizzes.json';
import { ref, watch } from 'vue';
import Card from '../components/Card.vue';

const quizzes = ref(q);
const search = ref('');

watch(search, () => {
  quizzes.value = q.filter(quiz =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <div>
    <header>
      <h1>Quizzes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..." />
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
      <!-- <div v-for="quiz in quizzes" :key="quiz.id" class="card">
          <img :src="quiz.img" alt="">
          <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{quiz.questions.length}} questions</p>
          </div>
        </div> -->
    </div>
  </div>
</template>

<style scoped>
header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

header h1 {
  font-weight: bold;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: space-evenly;
}
</style>
