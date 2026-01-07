# frozen_string_literal: true

def scan_email(text)
  rexp = /\b[\w._%+-]+@[[\w-]+.]{2,}\w{2,}\b/i
  res = text.scan(rexp)
  return [] if res.empty?

  res
end
