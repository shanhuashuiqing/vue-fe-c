/**
 * @author <a href="mailto:shanhuashuiqing11@163.com">SHSQ</a>
 * @version V1.0, 2018/8/4 16:16
 * @description 接口资源地址
 */

const prodCtx = 'https://cnodejs.org/api/v1'

const dev = process.env.NODE_ENV !== 'production'

export const BaseUri = prodCtx

export default BaseUri
