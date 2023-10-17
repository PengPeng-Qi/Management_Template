export default async (keyBase64: string, combinedBase64: string) => {
  // 将Base64编码的密钥转换为Uint8Array
  const rawKey = Uint8Array.from(atob(keyBase64), c => c.charCodeAt(0))

  // 导入密钥
  const key = await window.crypto.subtle.importKey(
    'raw',
    rawKey,
    {
      name: 'AES-GCM',
      length: 256
    },
    true, // 如果你不打算再次导出这个密钥，这里可以设置为false
    ['encrypt', 'decrypt']
  )

  // 将Base64编码的密文转换为Uint8Array
  const combinedDec = Uint8Array.from(atob(combinedBase64), c => c.charCodeAt(0))

  // 提取出初始化向量（IV）和密文
  const ivDec = combinedDec.slice(0, 12)
  const ciphertextDec = combinedDec.slice(12)

  // 使用导入的密钥和IV对密文进行解密
  const decrypted = await window.crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: ivDec
    },
    key,
    ciphertextDec
  )

  // 创建一个TextDecoder实例，用于将字节转换为文本
  const decoder = new TextDecoder()

  // 将解密后的数据从字节转换回文本，并返回
  return decoder.decode(decrypted)
}
