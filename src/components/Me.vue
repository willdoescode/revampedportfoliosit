<template>
  <div class="container">
    <img :src="require('../assets/willdoescode.jpeg')" alt="me" class="me" />
    <h3>My name is Will Lane</h3>
  </div>
</template>

<script>
export default {
  name: "Me"
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 80px;
  h3 {
    margin-top: 8px;
  }
}

.me {
  width: 300px;
  border-radius: 50%;
  transition: 0.8s;
  padding: 10px;
  background-color: #5d4257;
  background-image: linear-gradient(315deg, #5d4257 0%, #a5c7b7 74%);
  &:hover {
    transform: rotate(-360deg);
  }
}
@keyframes spin {
  100% {
  }
}
</style>
