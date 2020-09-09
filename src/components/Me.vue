<template>
  <div class="container">
    <img
      src="https://raw.githubusercontent.com/willdoescode/willdoescode/master/willdoescode.JPG"
      alt="me"
      class="me"
    />
    <h3>My name is Will Lane</h3>
  </div>
</template>

<script>
export default {
  name: 'Me'
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
  transition: 0.3s;
  padding: 10px;
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
  &:hover {
    border-radius: 15px;
  }
}
</style>
