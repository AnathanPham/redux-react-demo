export const OrderStatusMap = {
  FINISH: "finish",
  UNPAY: "unpay",
};

const SelectorLogStatusMap = {
  OPEN: "open",
  CLOSE: "close",
};
export const myConsole = {
  log: (text) => {
    console.log(`%c ${text}`, "color:#f00;");
  },

  component: (text) => {
    console.log(`%c ${text} render`, "color:#067413;");
  },

  selector: function (text) {
    if (this.selectorLogStatus === SelectorLogStatusMap.OPEN) {
      console.log(`%c ${text} - selector run`, "color:#5707cf;");
    }
  },
  selectorOpen: function () {
    this.selectorLogStatus = SelectorLogStatusMap.OPEN;
  },
  selectorClose: function () {
    this.selectorLogStatus = SelectorLogStatusMap.CLOSE;
  },
  selectorLogStatus: SelectorLogStatusMap.CLOSE,
};
