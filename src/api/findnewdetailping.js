import http from '@utils/request';

/*
 *  发现 新闻 评论接口
 */

export const findnewdetailpingApi = (newsId,pageIndex=1) => http({
    method:"get",
    url:"Service/callback.mi/News/Comment.api",
    data:{
       newsId:newsId,
       pageIndex:pageIndex
    }
})