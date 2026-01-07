# frozen_string_literal: true

require 'faraday'
#
# httobingo APIのラッパー
#
class ApiWrapper
  def initialize(conn)
    @connection = conn
  end

  def json
    @connection.get(
      '/json',
      { limit: 100 },
      { 'User-Agent' => 'myapp', 'Content-Type' => 'application/json' }
    )
  end
end

conn = Faraday.new(url: 'http://httpbingo.org')
wrapper = ApiWrapper.new(conn)
pp wrapper.json
