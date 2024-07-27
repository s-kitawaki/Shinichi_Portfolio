<template>
  <v-app>
    <v-container class="header-style ml-0 mr-0" fluid>
      <!-- マージンをリセットする場合以下のクラスに修正 -->
      <!-- <v-row no-gutters> -->
      <!-- <v-row> -->
      <v-row align-content="center" style="height: 25vh">
        <v-col align="center">
          <div class="logo mt-5">
            <p class="header-tittle white--text">Shinichi Kitawaki's portfolio</p>
            <p class="text-h4 white--text" style="color: #444">System Engineer</p>
          </div>
          <v-divider class="header-border"></v-divider>
          <v-list class="d-flex transparent-style  align-center justify-center">
            <v-list-item v-for="item in items" :key="item.text" :href="item.href">
              <div class="d-flex transparent-style">
                <v-list-item-icon>
                  <v-icon class="icon-style">{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="header-li-css">{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </div>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { href: '#Profile', icon: 'mdi-account', text: 'PROFILE' },
        { href: '#skill', icon: 'mdi-lightbulb', text: 'SKILL' },
        { href: '#works', icon: 'mdi-clipboard-check', text: 'WORKS' },
        { href: '#contact', icon: 'mdi-email', text: 'CONTACT' },
      ],
    };
  },
};
</script>

<style scoped>
.header-style {
  /* background-color: rgb(180, 180, 255); */
  background-image: url('../assets/Header.jpg'); /* ここに画像のパスを指定 */
  background-size: cover; /* 画像がコンテナ全体をカバーするようにする */
  background-position: center; /* 画像を中央に配置 */
  background-repeat: no-repeat; /* 画像を繰り返さない */
}

.header-tittle{
    font-size: 5rem !important;
    font-weight: 300;
    line-height: 5rem;
    letter-spacing: -0.015625em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
    margin-bottom: 10px;
    color: #444;
}

.header-border {
  width: 50vh;
  margin: 10px 0;
}

.header-li-css {
  color: #444;
  font-size: 1rem;
  margin-left: 10px;
  /* font-weight: bold; */
}

.transparent-style {
  background-color: transparent !important;
}

.icon-style {
  color: #444;
  font-size: 25px; /* 必要に応じてサイズを調整してください */
}
</style>
