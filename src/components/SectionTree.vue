<template>
  <section>
    <h1>sec-tree</h1>
    <ul class="tree">
      <li>
        <div>Parrent</div>
        <ul>
          <li>
            <div>
              first child
            </div>
          </li>
          <li>
            <div>
              second child
            </div>
          </li>
          <li>
            <div>
              third child
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
section {
  padding: 20px;
  height: 300px;
}

div {
  border: .5px solid;
  display: inline-block;
  padding: .2em .5em;
}

.tree {
  text-align: center;
  position: relative;

  ul {
    padding: 1em;
    position: relative;

    ::before {
      border: solid 1px;
      content: "";
      height: 1em;
      left: 50%;
      position: absolute;
      top: 0;
    }

  li {
    display: inline-block;
  }
  }
}

</style>
