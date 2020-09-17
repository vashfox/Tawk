<template>
  <div class="about">
    <Row style="margin-top: 3vh">
      <Col :span="24">
        <Breadcrumb v-if="categoryInfo">
          <BreadcrumbItem to="/">All Categories</BreadcrumbItem>
          <BreadcrumbItem>{{ categoryInfo.title }}</BreadcrumbItem>
        </Breadcrumb>
      </Col>
      <Col :span="24" style="margin-top: 3vh" v-if="categoryInfo">
        <Row :gutter="20">
          <Col :span="8">
            <Card style="border-radius: 0">
              <div style="text-align:center">
                <img height="75px" :src="setLogo(categoryInfo.icon)" />
                <h3 style="margin: 10px 0 5px">
                  {{ categoryInfo.title }}
                </h3>
                <div style="line-height:18px;margin-bottom:10px">
                  <small style="color: gray;"
                    >Last update {{ lastUpdate(categoryInfo.updatedOn) }}</small
                  >
                </div>
                <div class="divider"><Avatar :src="info" size="small" /></div>
                <div class="cat-info">
                  De quibus cupio scire quid sentias. Quid, de quo nulla
                  dissensio est Illum mallem levares sentias nulla dissensio.
                </div>
              </div>
            </Card>
          </Col>
          <Col :span="16">
            <List>
              <Card
                v-for="(item, i) in articles"
                :key="i"
                style="margin-bottom: 1vh"
              >
                <ListItem>
                  <ListItemMeta
                    :description="`Updated ${lastUpdate(item.updatedOn)}`"
                  >
                    <template slot="title">
                      <h4>{{ item.title }}</h4>
                    </template>
                    <template slot="avatar">
                      <Avatar size="large" shape="square" :src="file" />
                    </template>
                  </ListItemMeta>
                  <template slot="action">
                    <Avatar :src="arrow" size="small" />
                  </template>
                </ListItem>
              </Card>
            </List>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
import file from "@/assets/svg/file.svg";
import arrow from "@/assets/svg/arrow.svg";
import info from "@/assets/svg/info.svg";
import play from "@/assets/svg/play.svg";
import comment from "@/assets/svg/comment.svg";
import desktop from "@/assets/svg/desktop.svg";
import link from "@/assets/svg/link.svg";
import gem from "@/assets/svg/gem.svg";
import shoppingCart from "@/assets/svg/shopping-cart.svg";

export default {
  name: "category",
  data() {
    return {
      arrow,
      file,
      info,
    };
  },
  computed: {
    ...mapGetters("Category", ["categoryInfo", "articles"]),
    targetCategoryID() {
      return this.$route.params.id;
    },
  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch("Category/getCategoryInfo", this.targetCategoryID);
      this.$store.dispatch("Category/getArticles");
    }, 1000);
  },
  methods: {
    lastUpdate(date) {
      return moment(date).fromNow();
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

<style scoped>
.divider {
  border-top: 1px solid #ddd;
  padding-top: 5px;
  width: 112%;
  margin-left: -15px;
  margin-right: -15px;
}
.cat-info {
  margin-top: 2vh;
  font-style: Regular;
  font-size: 13px;
  line-height: 18px;
  vertical-align: Top;
}
</style>
