var JSZip = require("jszip");
var path = require("path");
var fs = require("fs");

class CustomPlugin {
  zip = new JSZip();
  constructor(props = {}) {
    this.props = {
      dir: "./dist",
      zipName: "dist.zip",
      ...props,
    };
  }
  apply(compiler) {
    // 钩子函数执行回调
    compiler.hooks.afterEmit.tap("CustomPlugin", (compilation) => {
      if (fs.existsSync(path.resolve(this.props.dir))) {
        this.toZip();
      }
    });
  }
  readDir(obj, nowPath) {
    // 读取目录中的所有文件及文件夹（同步操作）
    let files = fs.readdirSync(nowPath);
    files.forEach((fileName, index) => {
      let fillPath = nowPath + "/" + fileName;
      // 获取一个文件的属性
      let file = fs.statSync(fillPath);
      // 如果是目录的话，继续查询
      if (file.isDirectory()) {
        // 压缩对象中生成该目录
        let dirList = this.zip.folder(fileName);
        // 重新检索目录文件
        this.readDir(dirList, fillPath);
      } else {
        // 压缩目录添加文件
        obj.file(fileName, fs.readFileSync(fillPath));
      }
    });
  }

  toZip() {
    this.readDir(this.zip, path.resolve(this.props.dir));
    // 压缩
    this.zip
      .generateAsync({
        // 压缩类型选择nodebuffer，在回调函数中会返回zip压缩包的Buffer的值，再利用fs保存至本地
        type: "nodebuffer",
        // 压缩算法
        compression: "DEFLATE",
        compressionOptions: {
          level: 9,
        },
      })
      .then((content) => {
        // 将buffer写入.zip
        fs.writeFile(this.props.zipName, content, (err) => {
          if (!err) {
            console.log(this.props.zipName + "压缩成功");
          } else {
            console.log(this.props.zipName + "压缩失败");
          }
        });
      });
  }
}
module.exports = CustomPlugin;
