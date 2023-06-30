<script setup>
import { ref, onMounted } from 'vue';

const showModal = ref(false);
const newNote = ref('');
const errorMessage = ref('');
const notes = ref(
  JSON.parse(localStorage.getItem('notes')) || [
    {
      id: 724076,
      text: 'Work hard!',
      date: '2023-06-12 14:37',
    },
    { id: 473946, text: 'Learn Vue.', date: '2023-06-13 07:12' },
  ]
);

const hideModal = () => {
  showModal.value = false;
  newNote.value = '';
  errorMessage.value = '';
  if (notes.value.length === 0) {
    localStorage.removeItem('notes');
  }
};

const addNote = () => {
  if (newNote.value.length < 10) {
    return (errorMessage.value = 'Minimum 10 characters!');
  }
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(new Date().getTime() + 2 * 60 * 60 * 1000)
      .toISOString()
      .substring(0, 16)
      .replace('T', ' '),
  });
  localStorage.setItem('notes', JSON.stringify(notes.value));
  hideModal();
};

onMounted(() => {
  localStorage.setItem('notes', JSON.stringify(notes.value));
});
</script>

<template>
  <main>
    <div v-if="showModal" @click="hideModal" class="overlay">
      <div class="modal" @click.stop="">
        <textarea
          v-model.trim="newNote"
          name="note"
          id="note"
          cols="30"
          rows="10"
        ></textarea>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="addNote">Add Note</button>
        <button @click="hideModal()" class="close">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div v-for="note in notes" :key="note.id" class="card">
          <p class="main-text">
            {{ note.text }}
          </p>
          <p class="date">{{ note.date }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}

.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}

header button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 100%;
  color: white;
  font-size: 20px;
}

.card {
  width: 225px;
  height: 225px;
  background-color: rgb(246, 246, 246);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: #00000030 0 10px 20px, #0000003b 0 6px 6px;
}

.date {
  font-size: 12.5px;
  font-weight: bold;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: green;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
}

.modal .close {
  background-color: rgb(193, 15, 15);
  margin-top: 7px;
}

.modal p {
  color: rgb(193, 15, 15);
}
</style>
