<template>
  <div class="home">
    <Row :gutter="20" type="flex" style="margin-top:5vh">
      <Col
        :span="8"
        v-for="(item, i) in categories"
        :key="i"
        v-if="item.enabled"
        style="padding: 10px"
      >
        <div @click="onViewCategory(item)">
          <Card style="border-radius: 0">
            <div style="text-align:center">
              <img :src="setLogo(item.icon)" height="75px" />
              <h3 style="margin: 10px 0 15px">{{ item.title }}</h3>
              <div style="line-height:18px;margin-bottom:10px">
                <small style="color: #03a84e">
                  {{ item.totalArticle }} Articles </small
                ><br />
                <small style="color: gray;"
                  >Last update {{ lastUpdate(item.updatedOn) }}</small
                >
              </div>
            </div>
          </Card>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import moment from "moment";
import play from "@/assets/svg/play.svg";
import comment from "@/assets/svg/comment.svg";
import desktop from "@/assets/svg/desktop.svg";
import link from "@/assets/svg/link.svg";
import gem from "@/assets/svg/gem.svg";
import shoppingCart from "@/assets/svg/shopping-cart.svg";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters("Home", ["categories"]),
    ...mapGetters(["bundleLoaded"]),
  },
  methods: {
    lastUpdate(date) {
      return moment(date).fromNow();
    },
    onViewCategory(cat) {
      this.$router.push(`/category/${cat.id}`);
    },
    setLogo(key) {
      switch (key) {
        case "play":
          return play;
        case "comment":
          return comment;
        case "desktop":
          return desktop;
        case "link":
          return link;
        case "gem":
          return gem;
        case "shopping-cart":
          return shoppingCart;
      }
    },
  },
};
</script>
