import http from '@/utils/http.tsx'

// 列出档案
export function listArchive(path: string) {
  return http({
    url: '/list-archive?' + `path=${encodeURIComponent(path)}`,
    method: 'get',
  })
}

// 搜索档案
export function searchArchive(name: string) {
  return http({
    url: `/search-archive?name=${encodeURIComponent(name)}`,
    method: 'get',
  })
}

// 重命名档案/移动档案
export function moveArchive(data: string) {
  return http({
    url: '/move-archive',
    method: 'post',
    data,
  })
}

// 删除档案
export function deleteArchive(data: string) {
  return http({
    url: '/delete-archive',
    method: 'post',
    data,
  })
}

// 上传档案
export function uploadArchive(data: string) {
  return http({
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    url: '/upload-archive',
    method: 'post',
    data,
  })
}

// 创建档案目录
export function newArchiveDir(data: string) {
  return http({
    url: '/new-archive-dir',
    method: 'post',
    data,
  })
}
