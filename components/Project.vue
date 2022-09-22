<template>
  <div class="project__item-wrapper">
    <div class="project__item" @click="$emit('click')">
      <img
        v-if="project.logo_url"
        :src="project.logo_url"
        alt="project logo"
      >
      <div class="project__item-name">
        {{ project.name | lengthValidator }}
      </div>
      <div class="project__item-status">
        {{ project.is_active ? 'Active' : 'Not Active' }}
      </div>
      <div class="project__item-info">
        <div>
          <p>time this week</p>
          <p>{{ project.spent_sec_this_week | toDate }}</p>
        </div>
        <div>
          <p>time this month</p>
          <p>{{ project.spent_sec_this_mont | toDate }}</p>
        </div>
        <div>
          <p>time this week</p>
          <p>{{ project.spent_sec_all_time | toDate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: {
      type: Object,
      required: true,
    }
  },
  filters: {
    toDate: (seconds) => {
      if (!seconds) return '00:00:00'
      const date = new Date(null);
      date.setSeconds(seconds);
      return date.toISOString().substr(11, 8);
    },
    lengthValidator: (string) => {
      return string.length > 20 ? string.substr(0, 17) + '...' : string
    },
  }
}
</script>

<style lang="scss">
.project__item {
  display: grid;
  grid-template-columns: 25% 20% 15% 40%;
  grid-template-rows: 200px;
  align-items: center;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &-wrapper {
    @media screen and (max-width: 768px) {
      max-width: 350px;
      margin: 0 auto;
    }
    &:last-child {
      @media screen and (max-width: 768px) {
        margin-bottom: 20px;
      }
    }
    &:nth-last-child(n + 2) {
      margin-bottom: 20px;
    }
  }

  & img {
    grid-column-start: 1;
  }
  &-name {
    grid-column-start: 2;
    font-weight: bold;
  }
  &-status {
    grid-column-start: 3;
    color: #3ab42a;
    font-weight: bold;
  }
  &-info {
    grid-column-start: 4;

    @media screen and (max-width: 768px) {
      margin-bottom: 30px;
    }

    & div {
      p:first-child {
        width: 120px;
      }
      p:nth-child(2) {
        font-weight: bold;
      }
      display: flex;
      gap: 20px;
    }
  }
}
</style>
