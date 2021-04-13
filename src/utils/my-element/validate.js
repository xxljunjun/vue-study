import { Message, MessageBox } from 'element-ui'

let _common = {}

_common = {
  MessageError: MessageError,
  MessageInfo: MessageInfo,
  MessageSuccess: MessageSuccess,
  MessageWarning: MessageWarning,
  MesssageBoxQuestion: MesssageBoxQuestion,
  MessageBoxSuccess: MessageBoxSuccess,
  MessageBoxInfo: MessageBoxInfo,
  MessageBoxError: MessageBoxError
}

export default _common

export function MessageError(text = '错误',) {
  Message({
    message: text,
    type: 'error',
    duration: 3 * 1000,
    center: true,
    offset: 350,
  })
}
export function MessageInfo(text = '取消') {
  Message({
    message: text,
    type: 'info',
    duration: 3 * 1000,
    center: true,
    offset: 350,
  })
}
export function MessageSuccess(text = '成功') {
  Message({
    message: text,
    type: 'success',
    duration: 3 * 1000,
    center: true,
    offset: 350,
  })
}

export function MessageWarning(text = '警告') {
  Message({
    message: text,
    type: 'warning',
    duration: 3 * 1000,
    center: true,
    offset: 350,
  })
}

export function MesssageBoxQuestion(text = 'Box询问') {
  return MessageBox.confirm(text, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
}

export function MessageBoxSuccess(text = 'Box成功') {
  return MessageBox.confirm(text, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'success'
  })
}

export function MessageBoxInfo(text = 'Box取消') {
  return MessageBox.confirm(text, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'info'
  })
}

export function MessageBoxError(text = 'Box错误') {
  return MessageBox.confirm(text, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'error'
  })
}