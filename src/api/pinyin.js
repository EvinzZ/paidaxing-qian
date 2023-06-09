import request from '@/utils/request'

// 获取拼音首字母
export function getFirstLetter(query) {
    return request({
        url: '/pinyin/getFirstLetter',
        method: 'get',
        headers: {
            isToken: false
        },
        params: query,
    })
}

// 获取拼音
export function getPinyin(query) {
    return request({
        url: '/pinyin/getPinyin',
        method: 'get',
        headers: {
            isToken: false
        },
        params: query,
    })
}