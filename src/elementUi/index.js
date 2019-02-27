// 导入自己需要的组件
import { Upload,Row,Col,Button} from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Upload)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Button)
  }
};
export default element
