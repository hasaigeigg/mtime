import http from '@utils/request';

/**
 * 简易购物车接口(待优化一个数据库存总数据)
 */

 export const shopgoodsdetailApi = (goodsId,locationId)=>http({
     method:"get",
     url:"/Service/callback-mall.mi/product/detail.api",
     data:{
        goodsId:goodsId,
        locationId:locationId
     }
 })