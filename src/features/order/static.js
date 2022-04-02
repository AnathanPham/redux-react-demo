export const OrderStatusMap = {
  FINISH: "finish",
  UNPAY: "unpay",
};

export const myConsole = {
  component:(text)=>{
    console.log(`%c ${text} render`,'color:#067413;')
  },
  selector:(text)=>{
    console.log(`%c ${text} - selector run`,'color:#5707cf;')
  },
}