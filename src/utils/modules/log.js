import config from '../../../package.json'
// 项目名称
const projectName = `%c ${config.name} >>>`

// log -> 正常
const primary = 'color: #fff; background-color: #19be6b;'
// log -> 警告
const warning = 'color: #fff; background-color: #ff9900;'
// log -> 错误
const err = 'color: #fff; background-color: #fa3534;'

export function log() {
  console.log(projectName, primary, ...arguments)
}

export function warn() {
  console.warn(projectName, warning, ...arguments)
}

export function error() {
  console.error(projectName, err, ...arguments)
}
