"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "SubBox",
  setup(__props, { expose: __expose }) {
    let refs = null;
    const popup = common_vendor.ref();
    common_vendor.onMounted(() => {
      refs = common_vendor.getCurrentInstance().refs;
      common_vendor.index.__f__("log", "at components/SubBox.vue:15", "refs", refs);
    });
    const openPopup = () => {
      common_vendor.index.__f__("log", "at components/SubBox.vue:18", "打开");
      common_vendor.index.__f__("log", "at components/SubBox.vue:19", "--refs.popup", refs.popup);
      refs.popup.open();
    };
    __expose({
      openPopup
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(popup, "d4a6f95c-0", {
          "k": "popup"
        }),
        b: common_vendor.p({
          type: "top"
        })
      };
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/SubBox.js.map
