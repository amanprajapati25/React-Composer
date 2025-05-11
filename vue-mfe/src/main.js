import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
      });
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;






// -------------->>>>>
// import { h, createApp } from 'vue';
// import singleSpaVue from 'single-spa-vue';
// import App from './App.vue';

// // Create a Vue component that can be mounted by single-spa
// const vueLifecycles = singleSpaVue({
//   createApp,
//   appOptions: {
//     render() {
//       return h(App);
//     }
//   }
// });

// Create a React wrapper for Module Federation integration with React
// const VueWrapper = (props) => {
//   const ref = React.useRef(null);
  
//   React.useEffect(() => {
//     let app;
//     if (ref.current) {
//       app = createApp(App);
//       app.mount(ref.current);
//     }
    
//     return () => {
//       if (app) {
//         app.unmount();
//       }
//     };
//   }, []);
  
//   return React.createElement('div', { ref });
// };

// export const { bootstrap, mount, unmount } = vueLifecycles;
// export default VueWrapper;