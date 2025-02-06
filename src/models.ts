export type PaginatedEmailsResponse = {
  records: Email[]
  total: number
}

export type Email = {
  messageId: string
  date: string
  from: string
  to: string
  subject: string
  content: string
  contentTransferEncoding: string
  contentType: string
  mimeVersion: string
  xBcc: string
  xCc: string
  xFilename: string
  xFolder: string
  xFrom: string
  xOrigin: string
  xTo: string
}
