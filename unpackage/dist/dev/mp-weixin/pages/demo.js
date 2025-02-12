"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_uni_badge2 = common_vendor.resolveComponent("uni-badge");
  _easycom_uni_badge2();
}
const _easycom_uni_badge = () => "../uni_modules/uni-badge/components/uni-badge/uni-badge.js";
if (!Math) {
  (_easycom_uni_badge + SubBox)();
}
const SubBox = () => "../components/SubBox.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "demo",
  setup(__props) {
    let subBoxRef = common_vendor.ref(null);
    common_vendor.onMounted(() => {
    });
    const handleBtn = () => {
      common_vendor.index.__f__("log", "at pages/demo.vue:14", "subBoxRef", subBoxRef);
      const instance = subBoxRef.value;
      common_vendor.index.__f__("log", "at pages/demo.vue:16", "点击");
      common_vendor.index.__f__("log", "at pages/demo.vue:17", "__refs_instance", instance);
      instance.openPopup();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          text: "1"
        }),
        b: common_vendor.sr(subBoxRef, "4d16a390-1", {
          "k": "subBoxRef"
        }),
        c: common_vendor.o(handleBtn)
      };
    };
  }
});
wx.createPage(_sfc_main);
//# sourceMappingURL=../../.sourcemap/mp-weixin/pages/demo.js.map
