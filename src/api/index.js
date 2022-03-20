import request from "@/api/request";

export const reqNewsList = (data)=>request({
    url: '/news/selectByTypeId',
    method: 'post',
    data
})

// 获取新闻详情w
export const reqNewssInfo = (id) =>request({
    url: `/news/selectById/${id}`,
    method: 'get'
})

// 案例
export const reqCaseList = (data) => request({
    url: '/case/caseList',
    method: 'post',
    data
})
