<template>
  <div class="container">
    <p class="about">
      Hi, My name is Will Lane. I am a {{ getYear() }} year old high school student, and am a coder!
      My coding journey so far has been interesting. I started with Python and I liked it very much. Using Python I wrote an automated
      <a target="_blank" href="https://github.com/willdoescode/bot">bot</a> for the popular chat service called discord. Then I moved on to Java, and wrote an
      <a target="_blank" href="https://github.com/willdoescode/willsautoclick"> autoclicker</a> using the popular Java library called swing.
      Now I am at the web dev stage of my coding journey, I am learning the progressive JS framework called Vue, which I wrote <a target="_blank" href="https://github.com/willdoescode/portfoliosite">this site</a> in, and I am enjoying web dev very much.
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    getYear() {
      let year = new Date().getFullYear();
      // get the full year
      if (new Date().getMonth() < 9 && new Date().getDay() < 23) {
        // if the month is less than september and the day is less than the 23rd subtract a year because its not my birthday yet
        year--;
      }
      return year - 2006;
      //  return the current year minus the year I was born
    }
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

.container {
  font-family: 'Source Sans Pro', sans-serif;
  display: block;
  place-items: center;
  width: 70vw;
  margin-top: 80px;
  p {
    font-weight: bold;
    font-size: 20px;
    background-color: #4c4177;
    background-image: linear-gradient(315deg, #4c4177, #2a5470);
    color: white;
    padding: 10px;
    border-radius: 15px;
    a {
      color: #42b983;
      transition: 0.3s;
      &:hover {
        color: turquoise;
      }
    }
  }
}
</style>
