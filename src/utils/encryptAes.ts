const base64AesKey = async (key: CryptoKey) => {
  const rawKey = await window.crypto.subtle.exportKey('raw', key)
  const keyBase64 = btoa(String.fromCharCode(...new Uint8Array(rawKey)))
  return keyBase64
}

export const getAesKey = async () => {
  const key = await window.crypto.subtle.generateKey(
    {
      name: 'AES-GCM',
      length: 256
    },
    true,
    ['encrypt', 'decrypt']
  )
  return await base64AesKey(key)
}

const base64ToRawKey = async (base64Key: string) => {
  // 将Base64字符串转换为Uint8Array
  const keyArray = Uint8Array.from(atob(base64Key), c => c.charCodeAt(0))

  // 导入原始密钥
  const key = await window.crypto.subtle.importKey(
    'raw',
    keyArray,
    {
      name: 'AES-GCM',
      length: 256
    },
    true,
    ['encrypt', 'decrypt']
  )

  return key
}

export const encryptTxt = async (base64Key: string, text: string) => {
  const key = await base64ToRawKey(base64Key)
  const iv = window.crypto.getRandomValues(new Uint8Array(12))

  // 创建一个TextEncoder实例，用于将文本转换为字节
  const encoder = new TextEncoder()

  // 将输入的文本转换为字节
  const plaintext = encoder.encode(text)

  // 使用生成的密钥和IV对文本进行加密
  const ciphertext = await window.crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv
    },
    key,
    plaintext
  )

  // 创建一个新的Uint8Array，将IV和密文连接起来
  const combined = new Uint8Array(iv.byteLength + ciphertext.byteLength)
  combined.set(new Uint8Array(iv))
  combined.set(new Uint8Array(ciphertext), iv.byteLength)

  // 将连接后的结果转换为Base64字符串
  const combinedBase64 = btoa(String.fromCharCode(...combined))
  return combinedBase64
}
