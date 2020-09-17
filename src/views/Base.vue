<template>
  <div class="wrapper">
    <Row class="search-content" type="flex" justify="center" :gutter="20">
      <Col :span="16" class="search-content-wrapper">
        <div>
          <Row :gutter="20">
            <Col :span="24">
              <h1 align="center">Knowledge base doesn’t have to be boring</h1>
              <p align="center">Everything you need to Manage your Messaging</p>
            </Col>
          </Row>

          <Row
            :gutter="20"
            type="flex"
            justify="center"
            style="margin-top: 20px"
          >
            <Col :span="20">
              <Input
                size="large"
                search
                enter-button
                placeholder="Search for answers"
              />
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
    <Row
      class="content"
      justify="center"
      align="start"
      type="flex"
      :gutter="20"
    >
      <Col :span="16">
        <router-view />
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "Base",
  created() {
    this.$store.dispatch("getBundleData", null, { root: 1 });
  },
};
</script>

<style scope>
.wrapper {
  height: 99vh;
  width: 99vw;
}
.search-content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.search-content {
  height: 299px;
}
.content {
  min-height: calc(99vh - 299px);
  background: #fafafa;
}
</style>
