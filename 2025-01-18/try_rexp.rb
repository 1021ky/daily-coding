# frozen_string_literal: true

def contains?(sentence, word)
  /\b#{Regexp.escape(word)}\b/.match?(sentence)
end