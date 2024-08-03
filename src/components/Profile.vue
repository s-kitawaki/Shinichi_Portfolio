<template>
  <v-app>
    <v-container class="section-style" fluid>
      <v-row align-content="center" style="height: 45vh;">
        <v-col align="center" style="">
          <div class="section-title-block">
            <p class="section-title">
              <v-icon large>mdi-account</v-icon>
              <span class="section-title-css">PROFILE</span>
            </p>
          </div>
          <div align="center">
            <v-divider class="common-border"></v-divider>
          </div>
          <v-row class="two-column-wrapper" cols="5">
            <v-col class="profile">
              <v-img src="/IMG_4325.JPG" alt="" class="profile-img"></v-img>
            </v-col>
            <v-col class="two-column-desc" cols="7">
              <p class="text">
                はじめまして。平成11年生まれの24歳エンジニアの真一と申します。社会人歴2年目です。<br>
                文系大学出身からIT企業に入社し客先常駐・受託開発を経験してきました。常駐先で関わる人々の技術力を目の当たりにしたことで「そんな人たちと働きたい！」「もっと違う技術に触れたい！」
                と思うようになり転職を決意。 <br>
                最近のやり切った経験は1000行のSQLを書いて想定している挙動が確認できたことです。<br>
                趣味はテニスをしており、週1回スクールに通っています。(これから試合に出ていく予定)
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.section-style {
  padding: 4% 20%;
  background-color: #f3f3f3;
}

.section-title-block {
  text-align: center;
  margin-bottom: 30px;
}

.section-title {
  letter-spacing: -0.01em;
  display: inline-block;
  font-size: 56px;
  margin-bottom: 10px;
  color: #444;
}

.section-title-css {
  margin-left: 12px;
}

.common-border {
  text-align: center;
  width: 50vh;
  margin: 10px 0;
}

.two-column-wrapper {
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
}

.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden; /* 画像がはみ出さないようにする */
}

.profile-img {
  border-radius: 50%;
  min-height: 30px;
  max-height: 50%;
  min-width: 30%;
  max-width: 50%;
  object-fit: contain; /* 画像全体が表示されるようにする */
}

.two-column-desc {
  width: 62%;
  text-align: left;
}

.text {
  font-size: 16px;
  line-height: 1.5;
  color: #444;
}

.v-application__wrap {
  min-height: auto; /* min-heightを無効にするためautoに設定 */
}
</style>
