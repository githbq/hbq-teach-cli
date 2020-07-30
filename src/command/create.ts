import { consoleColor, io } from '../lib'
export default {
    /**
     * 启动
     */
    async start(data) {
        await io.write('./111.txt', '我是刘翰飞')
    },
    command: ['create', 'create', {
        // remove: {
        //     alias: ['r'],
        //     boolean: true,
        //     describe: 'describe'
        // },
        // lib: {
        //     alias: ['l'],
        //     boolean: true,
        //     default: false,
        //     describe: 'describe'
        // }
    }
    ]
}