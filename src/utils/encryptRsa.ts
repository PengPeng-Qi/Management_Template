import forge from 'node-forge'

export default (aeskey: string, pubencryptKey: string) => {
  // 将公钥格式化为PEM格式
  const publicKeyAll = '-----BEGIN PUBLIC KEY-----\n' + pubencryptKey + '\n-----END PUBLIC KEY-----'

  // 使用node-forge的pki模块从PEM格式的公钥中获取公钥对象
  const publicKey = forge.pki.publicKeyFromPem(publicKeyAll)

  // 创建一个buffer，存储AES密钥
  const buffer = forge.util.createBuffer(aeskey, 'utf8')

  // 从buffer中获取字节
  const bytes = buffer.getBytes()

  // 使用公钥对AES密钥进行加密，并将结果转换为Base64格式
  const pubencryptedText = forge.util.encode64(
    publicKey.encrypt(bytes, 'RSA-OAEP', {
      md: forge.md.sha256.create(), // 使用SHA-256作为散列函数
      mgf1: {
        md: forge.md.sha256.create() // 使用SHA-256作为MGF1的散列函数
      }
    })
  )

  return pubencryptedText
}
