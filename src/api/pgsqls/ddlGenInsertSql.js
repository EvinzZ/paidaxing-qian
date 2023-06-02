import request from '@/utils/request'

// ddl语句生成insert插入语句
export function ddlGenInsertSql(data) {
    return request({
        url: '/pgsql/ddlGenInsertSql',
        method: 'post',
        headers: {
            isToken: false
        },
        data: data
    })
}