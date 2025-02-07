# frozen_string_literal: true

# CLIならば、OPENAI_APIKEY={your api key} bundle exec ruby openapi_client.rbで実行できるはず
# 今日は制限超過したため、正常に動くところは確認できなかったが。

require 'openai'

def run
  api_key = ENV.fetch('OPENAI_APIKEY')
  client = OpenAI::Client.new(
    access_token: api_key,
    log_errors: true
  )
  # これで設定できるモデルの一覧を出せる
  # p client.models.list
  response = client.chat(
    parameters: {
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: 'こんにちは。API経由であなたに挨拶しています。' }],
      temperature: 0.7 # 再現性の度合い。0だったら同じ答えが返るようになる。
    }
  )
  puts response.dig('choices', 0, 'message', 'content')
end

run if __FILE__ == $PROGRAM_NAME
