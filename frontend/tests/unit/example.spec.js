import { shallowMount } from "@vue/test-utils";

describe("HelloWorld.vue", () => {
  it.skip("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
