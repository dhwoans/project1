<template>
  <form class="review-form" @submit="onCreateHandler">
    <textarea
      :placeholder="
        isLogin
          ? '아파트와 관련된 이야기를 남겨주세요 (20자 이상 200자 이하)'
          : '로그인이 필요한 기능입니다.'
      "
      v-model="review"
      class="review-input"
      maxlength="200"
      autoFocus
      :readonly="!isLogin"
    ></textarea>

    <div class="util">
      <span class="length">{{ this.review.length }} / 200</span>
      <form-button
        type="submit"
        title="<span><i class='fas fa-pen'></i></span>"
      />
    </div>
  </form>
</template>

<script>
import FormButton from "@/components/buttons/FormButton.vue";
import { mapState } from "vuex";

const accountsStore = "accountsStore";

export default {
  components: { FormButton },
  name: "NewReviewForm",
  props: { onCreate: Function, onAlert: Function },
  data() {
    return {
      review: "",
    };
  },
  computed: {
    ...mapState(accountsStore, ["isLogin"]),
  },
  methods: {
    async onCreateHandler(e) {
      e.preventDefault();

      if (!this.isLogin) {
        if (
          confirm(
            "로그인이 필요한 기능입니다. 로그인 페이지로 이동하시겠습니까?"
          )
        ) {
          this.$router.push({ name: "LogIn" });
        }
        return;
      }

      if (this.review.length < 20) {
        this.onAlert("20자 이상 작성해주세요.", true);
        return;
      }

      if (this.review.length > 200) {
        this.onAlert("200자 이하로 작성해주세요.", true);
        return;
      }

      this.onCreate(this.review);
      this.review = "";
    },
  },
};
</script>

<style scoped>
.review-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-light-grey);
  border-radius: var(--size-micro);
  margin: var(--size-large) 0 var(--size-small);
  padding: var(--size-small);
  background-color: var(--color-white);
}

.review-input {
  resize: none;
  height: 4rem;
}

.util {
  text-align: right;
}

.length {
  margin-right: var(--size-regular);
  font-size: var(--size-regular);
  text-align: right;
}

.button {
  border: none;
  color: var(--color-dark-grey);
  background: none;
  transition: all 150ms linear;
}

.button:hover {
  background: none;
  transform: scale(1.08);
}
</style>
