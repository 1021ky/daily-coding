#
# 文字数、行数、単語数などを数えるためのモジュール
#
module WC
  #
  # 文字数を数える
  #
  class CharacterCounter
    def self.count(words)
      words.size
    end
  end

  #
  # 行数を数える
  #
  class LineCounter
    def self.count(words)
      return 0 if words == ''
      words.split.size + 1
    end
  end

end