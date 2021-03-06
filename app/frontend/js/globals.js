import myExampleComponent from '@/components/globals/my-example.vue';
import router from '@/router';

function components(vue) {
  vue.component('myExample', myExampleComponent);
}

function plugins(vue) {
  vue.use(router);
}

const globals = {
  initialize(vue) {
    plugins(vue);
    components(vue);
  }
};

export default globals;
