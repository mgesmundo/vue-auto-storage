const Vue = require("vue");
const Storage = require("dom-storage");
const VueAutoStorage = require("../dist/vue-auto-storage");

beforeAll(() => {
  window.localStorage = new Storage();
  Vue.config.productionTip = false; // Do not show the production tip while running tests.
  Vue.use(VueAutoStorage);
});

describe("can be mounted in component", () => {
  test("mounted successfully", () => {
    const $vm = new Vue({
      name: "TestComponent",
      autoStorage: ["a"],
      data() {
        return { a: "a" };
      },
      render() {
        return `<div></div>`;
      }
    }).$mount();
    expect($vm.$options).toHaveProperty("autoStorage");
    expect($vm.$options.autoStorage).toHaveLength(1);
    expect($vm.$options.autoStorage).toEqual(expect.arrayContaining(["a"]));
    expect($vm).toHaveProperty("$autoStorage");
    expect($vm.$autoStorage).toHaveProperty("watch");
    expect($vm._watchers.filter(item => item.user)).toHaveLength(1);
  });

  test("mounted failed: do not have 'name' field", () => {
    const $vm = new Vue({
      autoStorage: ["a"],
      data() {
        return { a: "a" };
      },
      render() {
        return `<div></div>`;
      }
    }).$mount();
    expect($vm.$options).toHaveProperty("autoStorage");
    expect($vm).not.toHaveProperty("$autoStorage");
  });

  test("mounted failed: do not have 'autoStorage' field", () => {
    const $vm = new Vue({
      name: "TestComponent",
      data() {
        return { a: "a" };
      },
      render() {
        return `<div></div>`;
      }
    }).$mount();
    expect($vm.$options).not.toHaveProperty("autoStorage");
    expect($vm).not.toHaveProperty("$autoStorage");
  });
});

describe("can be effective", () => {
  test("automatic store data", () => {
    const $vm = new Vue({
      name: "TestComponent",
      autoStorage: ["a"],
      data() {
        return { a: "a" };
      },
      render() {
        return `<div></div>`;
      }
    }).$mount();

    $vm.a = "aa";

    // autoStorage has 300ms debounce to persist data
    setTimeout(() => {
      expect(window.localStorage).toHaveProperty($vm.$autoStorage.getName("a"));
      expect(window.localStorage.getItem($vm.$autoStorage.getName("a"))).toStrictEqual(
        JSON.stringify("aa")
      );
    }, 300);
  });

  test("automatic recovery data", () => {
    const $vm = new Vue({
      name: "TestComponent",
      autoStorage: ["a"],
      data() {
        return { a: "a" };
      },
      render() {
        return `<div></div>`;
      }
    }).$mount();

    setTimeout(() => {
      expect($vm.a).toStrictEqual("aa");
    }, 300);
  });
});