import { createWriteStream } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import archiver from 'archiver'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const output = createWriteStream(join(__dirname, '../dist/dist.zip'))
const archive = archiver('zip', {
  zlib: { level: 9 }, // 设置压缩级别
})

archive.directory('../dist/', false)

archive.pipe(output)
archive
  .finalize()
  .then(() => {
    console.log('ZIP💼文件已成功创建！')
  })
  .catch(err => {
    console.error('创建ZIP💼文件时出错： ', err)
  })

/*
 * postbuild 是 npm 的一个特殊命令，它会在 build 命令执行完毕后自动运行。在这个例子中，
 * 当你运行 npm run build 后，zip.js 脚本会自动运行，将 dist 文件夹打包成 dist.zip 文件。
 * */
