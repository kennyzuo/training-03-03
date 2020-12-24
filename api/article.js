import request from "@/utils/request.js"

export const getArticles = (params) => {
  return request({
    url: "/api/articles",
    method: "Get",
    params,
  })
}
